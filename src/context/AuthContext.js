/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */

import React, { createContext, useReducer, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authReducer } from "./authReducer";
import formApi from "../api/formApi";

const authInitialState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: '',
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, authInitialState);

    useEffect(() => {
        checkToken();
    }, []);

    const checkToken = async () => {
        const token = await AsyncStorage.getItem('token');
        console.log(token);

        // 1.No hay token
        if (!token) {
            dispatch({ type: 'notAuthenticated' });
        }

        // 2.Hay token
        try {
            const response = await formApi.get('/token/validate', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.status !== 200) {
            return dispatch({ type: 'notAuthenticated' });
        }

        dispatch({
            type: 'signUp',
            payload: {
                token: response.data.token,
                user: response.data.user,
            },
        });
        } catch (error) {
            // console.log(error);
        }

    };

    const signIn = async ({ email, password }) => {
        try {
            const response = await formApi.post('/login', { email, password });
            dispatch({
                type: 'signUp',
                payload: {
                    token: response.data.token,
                    user: response.data.user,
                },
            });
            console.log(response.data);
            // ALmacenamos el token en el async storage
            await AsyncStorage.setItem('token', response.data.token);

        } catch (error) {
            // console.log(error);
            console.log(error.response.data.errors);
            dispatch({
                type: 'addError',
                payload: 'información incorrecta',
            });
        }
    };
    const signUp = () => { };
    const logOut = async () => {
        console.log('logout');
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'logOut' });
    };
    const removeError = () => {
        dispatch({ type: 'removeError' });
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logOut,
            removeError,

        }}>
            {children}
        </AuthContext.Provider>
    );

};
