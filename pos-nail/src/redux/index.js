import { createStore, applyMiddleware, compose, } from 'redux';
import { Provider, } from 'react-redux';
import { autoRehydrate, } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

// Logger with default options
import logger from 'redux-logger'

import rootSagas from '../sagas';
import { rootReducer, } from '../stores';
import rehydrateStore from './rehydrateStore';

// Middlewares, enhancers
const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware,];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares ,logger), autoRehydrate());

// Create store (not rehydrate yet)
const store = createStore(rootReducer, enhancer);

// Method to start saga
const startSaga = () => sagaMiddleware.run(rootSagas);

export { Provider, rehydrateStore, startSaga, store };