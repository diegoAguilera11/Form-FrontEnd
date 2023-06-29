import CrearScreen from "../Screens/Form/CrearScreen";
import EditarScreen from "../Screens/Form/EditarScreen";
import EliminarScreen from "../Screens/Form/EliminarScreen";

const { createBottomTabNavigator } = require("@react-navigation/bottom-tabs");


const FormTab = createBottomTabNavigator();

export const FormBottomNavigator = () => {
    return (
        <FormTab.Navigator>
            <FormTab.Screen
                name="CrearFormulario"
                options={{ 
                    title: 'Crear Formulario',
                    headerShown: false
                 }}
                 component={CrearScreen}
            />

            <FormTab.Screen
                name="EditarFormulario"
                options={{ 
                    title: 'Editar Formulario',
                    headerShown: false
                 }}
                 component={EditarScreen}
            />

            <FormTab.Screen
                name="EliminarFormulario"
                options={{ 
                    title: 'Eliminar Formulario',
                    headerShown: false
                 }}
                 component={EliminarScreen}

            />
        </FormTab.Navigator>
    )
}