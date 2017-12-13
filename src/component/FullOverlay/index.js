import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import style from './style';

const FullOverlay = (props) => {
  const STYLE = {
    overlay: { ...props.overlayStyle, backgroundColor: props.overlayBGColor},
  };
  return (
    <View style={style.container}>
      <View style={[style.overlay, STYLE.overlay]} />
      <View style={style.children}>
        {props.children}
      </View>
    </View>
  );
};

FullOverlay.defaultProps = {
  children: '',
  overlayBGColor: 'rgba(30, 30, 30, 0.7)',
  overlayStyle: {}
};

FullOverlay.propTypes = {
  children: PropTypes.node,
  overlayStyle: PropTypes.object,
  overlayBGColor: PropTypes.string
};

export { FullOverlay };
