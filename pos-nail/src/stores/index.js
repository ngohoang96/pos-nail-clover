/*  header-comment
/*  file   : index
/*  author : Bon
/*  date   : 2020-1-2 11:37:7
/*  last   : 2020-1-2 14:30:17
*/

import { combineReducers } from 'redux';

import { testReducer, testTypes, testActions, testSelectors } from './test';

import { authActions, authSelector, authReducer, authTypes } from './auth';
import { cusActions, cusTypes, cusReducer, cusSelector } from './cus'
const rootReducer = combineReducers({
  test: testReducer,
  auth: authReducer,
  cus: cusReducer
});

const types = {
  test: testTypes,
  auth: authTypes,
  cus: cusTypes
};

const actions = {
  test: testActions,
  auth: authActions,
  cus: cusActions
};

const selectors = {
  test: testSelectors,
  auth: authSelector,
  cus: cusSelector
};

export { rootReducer, types, actions, selectors };
