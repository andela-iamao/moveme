import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import VideoPlayer from 'react-native-video-player';
import { NavigationActions } from 'react-navigation';
import { View, Dimensions, StyleSheet, Text } from 'react-native';

import { FullOverlay } from '../component';

import style from './style/style';


const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');
const CUSTOM_VIDEO_STYLE = StyleSheet.create({
  controls: { opacity: 0 }
});


class Home extends Component {
  render() {
    const { navigator } = this.props;
    return (
      <View>
        <VideoPlayer
          loop
          muted
          autoplay
          disableSeek
          disableFullscreen
          videoWidth={WIDTH}
          hideControlsOnStart
          videoHeight={HEIGHT - 50}
          customStyles={CUSTOM_VIDEO_STYLE}
          video={require('../assets/media/ezgif-5-db40568edb-115.mp4')}
        />
        <FullOverlay>
          <View style={style.homeExploreContainer}>
            <Button
              large
              title='Explore'
              onPress={() => navigator.navigate({ routeName: 'Discover' })}
              buttonStyle={[style.wideRoundButton, style.primaryButton]}
              textStyle={style.homeExploreButtonText}
              icon={{name: 'chevron-right', type: 'font-awesome'}}
            />
          </View>
        </FullOverlay>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    navigator: bindActionCreators(NavigationActions, dispatch)
  };
}

const HomeView = connect(null, mapDispatchToProps)(Home);

export { HomeView };
