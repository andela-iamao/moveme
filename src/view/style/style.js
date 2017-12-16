import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  homeLogoContainer: { alignItems: 'center' },
  homeExploreContainer: {
    flex: 1,
    width,
    height: height - 50,
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeExploreButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF'
  },
  discoverHeaderText: { fontSize: 16 },
  wideRoundButton: {
    borderRadius: 40,
    width: 220
  },
  centerBottom: { position: 'absolute', bottom: 80 },
  primaryButton: {
    backgroundColor: '#4299e2'
  },
  containerPadding: { padding: 10 }
});
