import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';

const Button = (props) => {
  const touchable = { ...props, textStyle: null };
  return (
    <TouchableHighlight { ...props }>
      {typeof props.label === 'string' ?
        <Text style={props.textStyle}>{props.label}</Text>
        :
        props.children
      }
    </TouchableHighlight>
  );
};

export { Button };
