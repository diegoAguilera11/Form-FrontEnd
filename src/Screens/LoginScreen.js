/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, Alert, StyleSheet } from 'react-native';
import { loginStyles } from '../theme/loginTheme';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';
import { Background } from '../components/Background';

const LoginScreen = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    });

    const { signIn, errorMessage, removeError } = useContext(AuthContext);
    const { email, password, onChange } = useForm({
        email: '',
        password: '',
    });

    useEffect(() => {
        if (errorMessage.length === 0) return;
        Alert.alert('Login incorrecto', errorMessage, [{
            text: 'Ok', onPress: removeError,
        }]);
    }, [errorMessage]);


    const onLogin = () => {
        console.log('email:', email, ' password: ', password);
        Keyboard.dismiss();

        signIn({ email, password });
    }


    return (

        <>
            <Background />
            {/* <TouchableOpacity
                style={styles.boton}
                onPress={() => navigation.navigate('RegisterScreen')}
            >
                <Text style={styles.texto_boton}>Ir a Registro</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.boton}
                onPress={() => navigation.replace('BottomNavigator')}
            >
                <Text style={styles.texto_boton}>Iniciar Sesión</Text>
            </TouchableOpacity> */}

            <KeyboardAvoidingView
                style={{
                    flex: 1
                }}
                behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
            >
                <View style={loginStyles.formContainer}>
                    <Text style={loginStyles.title}>Login</Text>
                    <Text style={loginStyles.label}>Email</Text>
                    <TextInput
                        style={loginStyles.input}
                        placeholder='Ingrese su email'
                        placeholderTextColor="black"
                        keyboardType='email-address'

                        autoCapitalize="none"
                        autoCorrect={false}

                        onChangeText={(value) => onChange(value, 'email')}
                        value={email}
                    />

                    {/* Contraseña */}
                    <Text style={loginStyles.label}>Contraseña</Text>
                    <TextInput
                        style={loginStyles.input}
                        placeholder='*****'
                        placeholderTextColor="black"
                        secureTextEntry
                        autoCapitalize="none"
                        autoCorrect={false}

                        onChangeText={(value) => onChange(value, 'password')}
                        value={password}
                    />
                    {/* Botono login */}
                    <View style={loginStyles.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={loginStyles.button}
                            onPress={onLogin}
                        >
                            <Text style={loginStyles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    );
};

const styles = StyleSheet.create({
    boton: {
        backgroundColor: 'red',
        paddingVertical: 10,
        marginHorizontal: 30,
    },
    texto_boton: {
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default LoginScreen