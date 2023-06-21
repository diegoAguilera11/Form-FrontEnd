import React, {useEffect, useContext} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

const FormularioScreen = ({navigation}) => {
  const {user, token, logOut} = useContext(AuthContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <View>
      <Text>FormularioScreen</Text>
      <TouchableOpacity
        onPress={logOut}
        style={{ backgroundColor: 'red', padding: 4, marginHorizontal: 40, borderRadius: 10 }}
      >
        <Text style={{ textAlign: 'center', color: 'black', fontSize: 20, fontWeight: 'bold' }}>Logout</Text>
      </TouchableOpacity>
      <Text>
          {JSON.stringify(user, null, 3)}
      </Text>
    </View>
  );
};

export default FormularioScreen