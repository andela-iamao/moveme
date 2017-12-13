import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  overlay: {
    width,
    height,
    top: 0,
    left: 0,
    zIndex: 5,
    position: 'absolute',
    // backgroundColor: 'transparent',
  },
  children: {
    zIndex: 7
  },
  container: {
    position: 'absolute'
  }
});
