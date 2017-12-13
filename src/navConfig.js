import { StackNavigator, TabNavigator } from 'react-navigation';

import { HomeView, MoviesView, DiscoverView, SearchView, GenreView } from './view';

export const NavTabConfig = TabNavigator({
  Discover: { screen: DiscoverView },
  Genre: { screen: GenreView },
  Search: { screen: SearchView }
});

export const NavStackConfig = StackNavigator({
  Home: { screen: HomeView },
  Movies: { screen: NavTabConfig }
});
