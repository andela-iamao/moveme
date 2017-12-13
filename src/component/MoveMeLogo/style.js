import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  logoImage: {
    width: 30,
    height: 30,
    marginRight: 5,
    marginLeft: 5,
    marginTop: 7
  },
  logoText: {
    lineHeight: 38,
    fontWeight: 'bold',
    fontSize: 24
  }
});
