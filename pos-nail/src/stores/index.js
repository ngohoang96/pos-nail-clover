/**
 * @author: thai.nguyen
 * @date: 2018-11-29 16:41:26
 *
 *
 */
import {combineReducers} from 'redux';

import {testReducer, testTypes, testActions, testSelectors} from './test';

import {authActions, authSelector, authReducer, authTypes} from './auth';
const rootReducer = combineReducers({
  test: testReducer,
  auth: authReducer,
});

const types = {
  test: testTypes,
  auth: authTypes,
};

const actions = {
  test: testActions,
  auth: authActions,
};

const selectors = {
  test: testSelectors,
  auth: authSelector,
};

export {rootReducer, types, actions, selectors};
