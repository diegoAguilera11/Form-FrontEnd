/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */

import React, {createContext, useReducer} from "react";
import { authReducer } from "./authReducer";
import formApi from "../api/formApi";

const authInitialState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: '',
};

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = async ({ email, password }) => {
        try {
            const response = await formApi.post('/login', { email, password });
            dispatch({type: 'signUp',
        payload: {
            token: response.data.token,
            user: response.data.user,
        }});
        } catch (error) {
            console.log(error);
            console.log(error.response.data.errors);
            dispatch({
                type: 'addError',
                payload: 'información incorrecta',
            });
        }
    };
    const signUp = () => { };
    const logOut = () => { };
    const removeError = () => { 
        dispatch({type: 'removeError'});
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
