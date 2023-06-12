import React, {useEffect} from 'react';
import { View, Text } from 'react-native';

const FormularioScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <View>
      <Text>FormularioScreen</Text>
    </View>
  );
};

export default FormularioScreen