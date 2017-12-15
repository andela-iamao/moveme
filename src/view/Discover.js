import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

import { MovieCard } from '../component';

import style from './style/style';
import * as discoverAction from '../action/discovery.action';

const DATA = ['popular', 'recent', 'coming soon'];


class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = { rendered: [] };
  }

  componentWillMount() {
    this.props.action.fetchPopular();
    this.props.action.fetchRecent();
    this.props.action.fetchComingSoon();
  }

  render() {
    return (
      <View>
        <ScrollView>
          {DATA.map((data) => (
            <View style={style.containerPadding} key={data}>
              <Text style={style.discoverHeaderText}>{data.toUpperCase()}</Text>
              <ScrollView horizontal>
                {this.props.discover[data].map((movie) => (
                  <MovieCard
                    key={`popular-${movie.title}`}
                    movie={movie}
                    releaseDate={data === 'coming soon' && movie.release_date}
                  />
                ))}
              </ScrollView>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    discover: state.discover
  };
}

function mapDispatchToProps(dispatch) {
  return { action: bindActionCreators(discoverAction, dispatch) }
}

const DiscoverView = connect(mapStateToProps, mapDispatchToProps)(Discover)

export { DiscoverView };