import { API_KEY } from 'react-native-dotenv';

export const createAsync = (start, end, error, fn) => {
  return (dispatch) => {
    dispatch({ type: start });
    return fn(dispatch)
      .then((payload) => dispatch({type: end, payload}))
      .catch((error) => dispatch({type: error, payload: error}));
  }
};

export const api = {
  get(url) {
    return fetch(url)
      .then((res) => res.json())
      .then((res) => res);
  }
};

export const tmdb = {
  get(url) {
    return fetch(`https://api.themoviedb.org/3${url}`)
      .then((res) => res.json())
      .then((res) => res);
  }
};

export const tmdbAPI = {
  movie: {
    popular: (page = 1) => `/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
    recent: (page) => `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`,
    upcoming: (page) => `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
  }
};