/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AmbitoScreen from '../Screens/Bottom/AmbitoScreen';
import FormularioScreen from '../Screens/Bottom/FormularioScreen';
import ComponenteScreen from '../Screens/Bottom/ComponenteScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
    return (
        <Tab.Navigator
        >
            <Tab.Screen
                name="FormularioScreen"
                options={{
                    title: 'Formulario',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="file-tray-full-outline" size={size} color={color} />
                    ),
                }}
                component={FormularioScreen}
            />
            <Tab.Screen
                name="AmbitoScreen"
                options={{
                    title: 'Ambito',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="file-tray-stacked-outline" size={size} color={color} />
                    )
                }}
                component={AmbitoScreen}

            />
        </Tab.Navigator>
    );
}