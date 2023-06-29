import React, { useContext } from 'react';
import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions, View, Text, Image, TouchableOpacity } from 'react-native'
import Article from '../Screens/Article';
import { styles } from '../theme/appTheme';
import { BottomNavigator } from './BottomNavigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';
import { FormBottomNavigator } from './FormBottomNavigator';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
    const { width } = useWindowDimensions();
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: width >= 720 ? 'permanent' : 'front',
                // headerShown: false
            }}
            drawerContent={props => <MenuInterno {...props} />}
        >
            <Drawer.Screen name='BottomFormNavigator' options={{ title: '' }} component={FormBottomNavigator} />
            <Drawer.Screen name='BottomNavigator' options={{ title: '' }} component={BottomNavigator} />
            <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
    );
}


const MenuInterno = ({ navigation }) => {
    const { logOut } = useContext(AuthContext)
    return (
        <DrawerContentScrollView>
            {/* Parte del Avatar */}
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
                    }}
                    style={styles.avatar}
                />
            </View>

            {/* Opciones del Menú */}
            <View style={styles.menuContainer}>

                <TouchableOpacity
                    style={{
                        ...styles.menuBoton,
                        flexDirection: 'row'
                    }}
                    onPress={() => navigation.navigate('BottomFormNavigator')}
                >
                    <Text style={styles.menuTexto}> Formulario </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.menuBoton,
                        flexDirection: 'row'
                    }}
                    onPress={() => navigation.navigate('BottomNavigator')}
                >
                    <Text style={styles.menuTexto}> Navegación</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.menuBoton,
                        flexDirection: 'row'
                    }}
                    onPress={logOut}
                >
                    <Text style={styles.menuTexto}> Cerrar Sesión</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}