
import {combineReducers} from 'redux';

import {homeReducer, homeTypes, homeActions, homeSelectors} from './home';

import {authActions, authSelector, authReducer, authTypes} from './auth';
import {cusActions, cusTypes, cusReducer, cusSelector} from './cus';
const rootReducer = combineReducers({
  home: homeReducer,
  auth: authReducer,
  cus: cusReducer,
});

const types = {
  home: homeTypes,
  auth: authTypes,
  cus: cusTypes,
};

const actions = {
  home: homeActions,
  auth: authActions,
  cus: cusActions,
};

const selectors = {
  home: homeSelectors,
  auth: authSelector,
  cus: cusSelector,
};

export {rootReducer, types, actions, selectors};
