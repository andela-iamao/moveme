import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 5,
    marginLeft: 5,
    marginTop: 7,
    alignItems: 'center',
    borderBottomWidth: 5,

  },
  logoImage: {
    width: 100,
    height: 30,
  },
  logoText: {
    lineHeight: 42,
    fontWeight: 'bold',
    fontSize: 18
  }
});
