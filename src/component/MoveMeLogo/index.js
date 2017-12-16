import React from 'react';
import { View, Image, Text } from 'react-native';

import style from './style';

const MoveMeLogo = (props) => {
  return (
    <View style={style.container}>
      <Image
        source={require('../../assets/media/logo2.png')}
        style={style.logoImage}
      />
    </View>
  );
};

export { MoveMeLogo };

{/*<Text style={style.logoText}>moveme</Text>*/}
{/*<Image*/}
{/*source={require('../../assets/media/logo.png')}*/}
{/*style={style.logoImage}*/}
{/*/>*/}
