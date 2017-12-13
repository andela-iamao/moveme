import { addNavigationHelpers } from 'react-navigation';

import { NavStackConfig } from '../navConfig';

const AppNavigator = NavStackConfig;

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Home')
);

export default (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};
