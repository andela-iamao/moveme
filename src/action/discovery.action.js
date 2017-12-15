import * as types from './actionTypes';
import { createAsync, api } from './util';

export const fetchPopular = () =>  {
  return createAsync(
    types.FETCH_POPULAR,
    types.FETCH_POPULAR_COMPLETE,
    types.FETCH_POPULAR_ERROR,
    () => api.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e0a6e1c9f5d3f984503f475e8e228091')
  )
};

export const fetchRecent = () => {
  return createAsync(
    types.FETCH_RECENT,
    types.FETCH_RECENT_COMPLETE,
    types.FETCH_RECENT_ERROR,
    () => api.get('https://api.themoviedb.org/3/movie/now_playing?api_key=e0a6e1c9f5d3f984503f475e8e228091&language=en-US&page=1'))
};

export const fetchComingSoon = () => {
  return createAsync(
    types.FETCH_COMING_SOON,
    types.FETCH_COMING_SOON_COMPLETE,
    types.FETCH_COMING_SOON_ERROR,
    () => api.get('https://api.themoviedb.org/3/movie/upcoming?api_key=e0a6e1c9f5d3f984503f475e8e228091&language=en-US&page=1')
  )
};
