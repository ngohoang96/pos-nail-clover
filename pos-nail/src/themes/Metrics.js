/**
 * @author: thai.nguyen 
 * @date: 2018-06-25 23:42:33 
 *
 *  
 */
import { Dimensions, Platform, StatusBar, } from 'react-native';

// Note: window mean application window size
const { width: appWidth, height: appHeight, } = Dimensions.get('window');

const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';

const baseUnit = 8;
const getBaseUnitFactor = (multiplier: number = 1) => baseUnit * multiplier;

export default {
  isAndroid,
  isIOS,
  appHeight,
  appWidth,

  androidNavBarHeight: 56, // Fixed height from RNN
  statusBarHeight: isAndroid ? StatusBar.currentHeight : 20, //20 is hard core status bar height on iOS

  getBaseUnitFactor,

  // TODO: clean up the bellow metrics
  //   marginHorizontal: 10,
  //   marginVertical: 10,
  //   section: 28,
  //   baseMargin: 10,
  //   doubleBaseMargin: Platform.OS === 'ios' ? 20 : 0,
  //   smallMargin: 5,
  //   doubleSection: 50,
  //   horizontalLineHeight: 1,
  //   searchBarHeight: 30,
  //   typeOfDevice: Platform.OS === 'ios' ? 2 : 1,
  //   navBarHeight: Platform.OS === 'ios' ? 64 : 64, // 70
  //   bottomSpace: 114,
  //   navBarHeightRestarurantDetail: Platform.OS === 'ios' ? 76 : 54,
  //   inviteListHeight: height - 150,
  //   buttonRadius: 4,
  //   header: {
  //     onboarding: width > 320 ? (Platform.OS === 'ios' ? 90 : 20) : 60,
  //     discover: 65,
  //     EditTable: 82,
  //   },
  //   icons: {
  //     tiny: 15,
  //     small: 20,
  //     medium: 30,
  //     large: 45,
  //     xl: 50,
  //   },
  //   images: {
  //     small: 20,
  //     medium: 40,
  //     large: 60,
  //     logo: 91,
  //   },

  //   getRelativeSize: (size, total = 375) => {
  //     /**used to get the relative size for our designs */
  //     const TOTAL_WIDTH = width < height ? width : height;
  //     return size / total * TOTAL_WIDTH;
  //   },
};
