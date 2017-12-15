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
