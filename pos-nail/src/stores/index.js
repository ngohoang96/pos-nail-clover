/**
 * @author: thai.nguyen
 * @date: 2018-11-29 16:41:26
 *
 *
 */
import {combineReducers} from 'redux';
import {persistCombineReducers} from 'redux-persist';
// old
// import storage from 'redux-persist/lib/storage';
//new
import AsyncStorage from '@react-native-community/async-storage';

import {testReducer, testTypes, testActions, testSelectors} from './test';
const config = {
  key: 'test',
  storage: AsyncStorage,
};
const rootReducer = persistCombineReducers(config, {
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
