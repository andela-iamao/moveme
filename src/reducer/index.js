import { combineReducers } from 'redux';

import nav from './nav.reducer';
import discover from './discover.reducer';

export default combineReducers({ nav, discover });
