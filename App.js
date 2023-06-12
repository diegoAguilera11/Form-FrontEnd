import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { AuthProvider } from './src/context/AuthContext';


const AppState = ({ children }) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
};


const App = () => {
    return (
        <NavigationContainer>
            <AppState>
                <StackNavigator />
            </AppState>
        </NavigationContainer>
    );
};

export default App