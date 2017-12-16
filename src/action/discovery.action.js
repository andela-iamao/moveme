import { API_KEY } from 'react-native-dotenv';
import * as types from './actionTypes';
import { createAsync, api, tmdb, tmdbAPI } from './util';

export const fetchPopular = () =>  {
  return createAsync(
    types.FETCH_POPULAR,
    types.FETCH_POPULAR_COMPLETE,
    types.FETCH_POPULAR_ERROR,
    () => tmdb.get(tmdbAPI.movie.popular())
  )
};

export const fetchRecent = () => {
  return createAsync(
    types.FETCH_RECENT,
    types.FETCH_RECENT_COMPLETE,
    types.FETCH_RECENT_ERROR,
    () => tmdb.get(tmdbAPI.movie.recent()))
};

export const fetchComingSoon = () => {
  return createAsync(
    types.FETCH_COMING_SOON,
    types.FETCH_COMING_SOON_COMPLETE,
    types.FETCH_COMING_SOON_ERROR,
    () => tmdb.get(tmdbAPI.movie.upcoming())
  )
};
