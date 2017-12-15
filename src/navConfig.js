import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { StackNavigator, TabNavigator } from 'react-navigation';

import { HomeView, FavouritesView, DiscoverView, SearchView, GenreView } from './view';
import { MoveMeLogo, NavLabel } from './component';

export const NavTabConfig = TabNavigator({
  Discover: {
    screen: DiscoverView,
    navigationOptions: {
      tabBarIcon: ({tintColor}) =>
        <Icon
          name="light-bulb"
          color={tintColor}
          style={{ fontSize: 20 }}/>
    }
  },
  Genre: {
    screen: GenreView,
    navigationOptions: {
      tabBarIcon: ({tintColor}) =>
        <Icon
          name="list"
          color={tintColor}
          style={{ fontSize: 20 }}/>
    }
  },
  Search: {
    screen: SearchView,
    navigationOptions: {
      tabBarIcon: ({tintColor}) =>
        <Icon
          name="magnifying-glass"
          color={tintColor}
          style={{ fontSize: 20 }}/>
    }
  },
  Watchlist: {
    screen: FavouritesView,
    navigationOptions: {
      tabBarIcon: ({tintColor}) =>
        <Icon
          name="star"
          color={tintColor}
          style={{ fontSize: 20 }}/>
    }
  }
});

export const NavStackConfig = StackNavigator({
  Home: {
    screen: HomeView,
    navigationOptions: { headerTitle: <MoveMeLogo /> }
  },
  Movies: {
    screen: NavTabConfig,
    navigationOptions: { headerTitle: <MoveMeLogo /> }
  }
});
