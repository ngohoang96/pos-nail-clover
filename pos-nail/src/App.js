/**
 * @author: thai.nguyen
 * @date: 2018-11-29 17:07:41
 *
 *
 */
import {Provider, store, rehydrateStore, startSaga} from './redux';
import * as AppsController from './AppController';
import {Logg, FiFetch} from './utils';
import {registerScreens} from './screens';
import screenHOC from './app-navigation/screenHOC';
import {AppNavigation} from './app-navigation';
import {selectors, actions} from './stores';

// IMPORTANT: register screens on native level, must be excuted before other code.
registerScreens(screenHOC, store, Provider);

const startApp = async () => {
  // Load the data from storage to redux store
  await rehydrateStore(store);
  // AppNavigation.setDefaultOptions();

  startSaga();
  AppsController.startHome();
};

export default {start: startApp};
