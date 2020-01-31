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

const screens = {
  [IDs.Home]: Home,
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
      () => enhancers(screens[screenID]),
      Provider,
      store,
    );
  });
};

StatusBar.setBarStyle('dark-content');

export {registerScreens, IDs};
