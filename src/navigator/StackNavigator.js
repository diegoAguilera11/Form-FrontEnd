/* eslint-disable jsx-quotes */
/* eslint-disable react/react-in-jsx-scope */
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import { BottomNavigator } from './BottomNavigator';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';



const Stack = createStackNavigator();

export const StackNavigator = () => {
  const {status} = useContext(AuthContext);
  return (
    <Stack.Navigator>
      {
        (status !== 'authenticated')
          ? (
            <>
              <Stack.Screen name='LoginScreen' options={{ title: 'Login' }} component={LoginScreen} />
              <Stack.Screen name='RegisterScreen' options={{ title: 'Register' }} component={RegisterScreen} />
            </>
          )
          : (
            <Stack.Screen name='BottomNavigator' options={{ title: 'Bottom Tabs' }} component={BottomNavigator} />
          )
      }
    </Stack.Navigator>
  );
}