import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import { HomeView, MoviesView, DiscoverView, SearchView, GenreView } from './view';
import { MoveMeLogo } from './component';

export const NavTabConfig = TabNavigator({
  Discover: { screen: DiscoverView },
  Genre: { screen: GenreView },
  Search: { screen: SearchView }
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
