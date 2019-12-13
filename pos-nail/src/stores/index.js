/**
 * @author: thai.nguyen
 * @date: 2018-11-29 16:41:26
 *
 *
 */
import {combineReducers} from 'redux';

import {testReducer, testTypes, testActions, testSelectors} from './test';

const rootReducer = combineReducers({
  test: testReducer,
});

const types = {
  test: testTypes,
};

const actions = {
  test: testActions,
};

const selectors = {
  test: testSelectors,
};

export {rootReducer, types, actions, selectors};
