/* eslint-disable jsx-quotes */
/* eslint-disable react/react-in-jsx-scope */
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import { BottomNavigator } from './BottomNavigator';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import LoadingScreen from '../Screens/LoadingScreen';
import { MenuLateral } from './MenuLateral';



const Stack = createStackNavigator();

export const StackNavigator = () => {
  const { status } = useContext(AuthContext);


  if (status === 'checking') {
    return <LoadingScreen />
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          // Quitar linea separacion header y body
          elevation: 0, // Android 
          shadowColor: 'transparent' // Ios
        },
        cardStyle: {
          backgroundColor: 'white'
        },
        headerShown: false
      }}
    >
      {
        (status !== 'authenticated')
          ? (
            <>
              <Stack.Screen name='LoginScreen' options={{ title: 'Login' }} component={LoginScreen} />
              <Stack.Screen name='RegisterScreen' options={{ title: 'Register' }} component={RegisterScreen} />
            </>
          )
          : (
            <>
              <Stack.Screen name='MenuLateral' options={{ title: 'ejemplo0' }} component={MenuLateral} />
            </>
          )
      }
    </Stack.Navigator>
  );
}