import React, {useEffect} from 'react';
import { View, Text } from 'react-native';


const AmbitoScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <View>
      <Text>AmbitoScreen</Text>
    </View>
  );
};

export default AmbitoScreen