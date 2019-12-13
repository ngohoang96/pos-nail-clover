/**
 * @author: thai.nguyen 
 * @date: 2018-11-29 17:16:35 
 *  
 * 
 */
import { Colors, Metrics, Fonts, } from '../themes';

export const DefaultStyle = {
  // Title
  navBarTextColor: '#fff',
  navBarTextFontSize: 17,
  navBarTextFontFamily: Fonts.Default.bold,

  navBarBackgroundColor: Colors.mainColor,
  navBarButtonColor: '#fff',
  navBarHidden: true,
  screenBackgroundColor: 'transparent',

  drawUnderTabBar: false,
  orientation: 'portrait', // Force orientation
  statusBarTextColorScheme: Colors.statusBarTextColors.dark,

  // iOS only
  // Do not allow user to swipe back on iOS
  disabledBackGesture: true,

  // Android only
  statusBarColor: 'white',
  navBarTitleTextCentered: true, // Center the title on Android (default align left)
};

export const HideNavBarStyle = {
  ...DefaultStyle,
  navBarHidden: true,
};

export const HideBottomTabStyle = {
  ...DefaultStyle,
  tabBarHidden: true,
};

export const LandingStyle = {
  ...DefaultStyle,

  drawUnderNavBar: true,
  navBarTransparent: true,
  navBarTranslucent: Metrics.isIOS,

  navBarTextColor: 'white',
  navBarButtonColor: 'white',

  topBarElevationShadowEnabled: false,
  navBarNoBorder: true,

  // Android only
  statusBarColor: 'black',
  statusBarTextColorScheme: Colors.statusBarTextColors.light,
};

export const CommonOptions = {
  topBar: {
    background: {
      color: Colors.backgroundL1,
    },
  },
};

