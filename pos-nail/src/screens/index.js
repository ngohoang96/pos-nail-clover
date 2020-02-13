/**
 * @author: thai.nguyen
 * @date: 2018-11-29 16:55:26
 *
 *
 */

import {StatusBar} from 'react-native';
import {Navigation} from 'react-native-navigation';
import IDs from './ScreenIDs';
import Home from './home/Home';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import CustomerSignIn from './home/modal/customer/sign-in/index';
import CustomerRegister from './home/modal/customer/register/index';
const screens = {
  [IDs.Home]: Home,
  [IDs.CustomerSignIn]: CustomerSignIn,
  [IDs.CustomerRegister]: CustomerRegister,
};

const registerScreens = (
  enhancers: Function = a => a,
  store: Object,
  Provider: Object,
) => {
  // Loop through the array and register every screen in it.
  Object.keys(screens).map(screenID => {
    Navigation.registerComponentWithRedux(
      screenID,
      () => enhancers(gestureHandlerRootHOC(screens[screenID])),
      Provider,
      store,
    );
  });
};

StatusBar.setBarStyle('dark-content');

export {registerScreens, IDs};
