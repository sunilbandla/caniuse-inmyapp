/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { createStore, combineReducers } from 'redux';

export const ACTION_ADD_BROWSER = 'ADD_BROWSER';
export const ACTION_UPDATE_BROWSER = 'UPDATE_BROWSER';
export const ACTION_UPDATE_FEATURE_QUERY = 'UPDATE_FEATURE_QUERY';

export function addBrowserAction() {
  return {
    type: ACTION_ADD_BROWSER,
  };
}
export function updateBrowserAction(index, browserDetails) {
  return {
    type: ACTION_UPDATE_BROWSER,
    index,
    browserDetails,
  };
}
export function updateFeatureQueryAction(featureQuery) {
  return {
    type: ACTION_UPDATE_FEATURE_QUERY,
    featureQuery,
  };
}

function usageInputReducer(state = [{
  browserValue: null,
  browserVersion: null,
  userShare: 0,
}], action) {
  let newState;
  switch (action.type) {
    case ACTION_ADD_BROWSER:
      newState = state.slice(0);
      newState.push({
        browserValue: null,
        browserVersion: null,
        userShare: 0,
      });
      return newState;
    case ACTION_UPDATE_BROWSER:
      newState = state.slice(0);
      newState[action.index] = Object.assign(newState[action.index], {
        browserValue: action.browserDetails.browserValue,
        browserVersion: action.browserDetails.browserVersion,
        userShare: action.browserDetails.userShare,
      });
      return newState;
    default:
      return state;
  }
}

function featureQueryReducer(state = '', action) {
  switch (action.type) {
    case ACTION_UPDATE_FEATURE_QUERY:
      return action.featureQuery;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  usageInput: usageInputReducer,
  featureQuery: featureQueryReducer,
});

// Centralized application state
// For more information visit http://redux.js.org/
const store = createStore(
  rootReducer
);

export default store;
