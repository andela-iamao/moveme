import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const NavLabel = (props) => {
  return (
    <View>
      <Text><Icon name="ion-android-bulb" color={"#000"}/></Text>
      <Text>{props.label}</Text>
    </View>
  );
};

export { NavLabel };