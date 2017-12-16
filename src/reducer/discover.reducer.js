import moment from 'moment';
import initialState from './initialState';
import * as actionType from '../action/actionTypes';

export default (state=initialState.discover, { type, payload }) => {
  switch(type) {
    case actionType.FETCH_POPULAR: {
      return { ...state, isLoading: true };
    }
    case actionType.FETCH_POPULAR_COMPLETE: {
      return { ...state, isLoading: false, popular: payload.results };
    }
    case actionType.FETCH_POPULAR_ERROR: {
      return { ...state, isLoading: false, error: payload };
    }
    case actionType.FETCH_RECENT: {
      return { ...state, isLoading: true };
    }
    case actionType.FETCH_RECENT_COMPLETE: {
      return { ...state, isLoading: false, recent: payload.results };
    }
    case actionType.FETCH_RECENT_ERROR: {
      return { ...state, isLoading: false, error: payload };
    }
    case actionType.FETCH_COMING_SOON: {
      return { ...state, isLoading: true };
    }
    case actionType.FETCH_COMING_SOON_COMPLETE: {
      return {
        ...state,
        isLoading: false,
        'coming soon': payload.results.filter((result) => {
          return moment(result.release_date) > moment(new Date());
        }) };
    }
    case actionType.FETCH_COMING_SOON_ERROR: {
      return { ...state, isLoading: false, error: payload };
    }
    default: {
      return { ...state };
    }
  }
}