/**
 * @author: thai.nguyen 
 * @date: 2018-06-25 23:44:02 
 *
 *  
 */
import { Logg, } from '../utils';
import Metrics from './Metrics';
import Colors from './Colors';
import Fonts from './Fonts';

// eslint-disable-next-line
const isDevMode = __DEV__;
const devDefaultTab = 4;

// Common tab styles that share between android and ios
const commonTabStyle = {
  // Change the default select tab on launch
  ...(isDevMode ? { initialTabIndex: devDefaultTab, } : {}),

  // Colors
  tabBarBackgroundColor: 'white',
  tabBarButtonColor: '#999999',
  tabBarSelectedButtonColor: Colors.primary,

  tabBarTranslucent: false, // Translucent (opacity) effect on iOS
};

export default (() => {
  switch (true) {
    case Metrics.isIOS:
      return {
        tabsStyle: {
          ...commonTabStyle,
          // keepStyleAcrossPush: false,
          // tabBarTextFontFamily: Fonts.Default.regular,

          // tabBarButtonColor: Colors.inActiveBtmTabColor,
          // tabBarSelectedButtonColor: Colors.primary,
          // tabBarLabelColor: Colors.inActiveBtmTabColor,
          // tabBarSelectedLabelColor: Colors.primary,

          tabBarTranslucent: true,
          // tabBarHideShadow: true // iOS only. Remove default tab bar top shadow (hairline)
        },
      };
    case Metrics.isAndroid:
      return {
        appStyle: {
          ...commonTabStyle,
          // tabFontFamily: Fonts.Default.regular,
          forceTitlesDisplay: true,
        },
      };
    default: {
      Logg.error('Tabbar style', 'The app is running on unknown OS');
      return {};
    }
  }
})();
