/**
 * @author: thai.nguyen
 * @date: 2018-11-29 16:55:26
 *
 *
 */

import {StatusBar} from 'react-native';
import {Navigation} from 'react-native-navigation';
import IDs from './ScreenIDs';
import HomeScreen from './home/home-screen';
import WelcomeScreen from './welcome/welcome-screen';
import NewCustomerScreen from './new-customer/new-customer-screen' ; 
import OldCustomerScreen from './old-customer/old-customer-screen' ; 
import ConfirmScreen from './confirm-apppointment/confirm-appointment-screen';
import ConfirmApScreen from './confirm-appointment-time/confirm-screen';
import YourNailsScreen from './your-nails-tech/your-nails-tech-screen';
import YourServiceScreen from './your-prefer-service/your-service-screen';
import CustomerInfoScreen from './new-customer-info/customer-info-screen';

const screens = {
  [IDs.Init]: HomeScreen,
  [IDs.Welcome] : WelcomeScreen , 
  [IDs.NewCustomer] : NewCustomerScreen , 
  [IDs.OldCustomer] : OldCustomerScreen , 
  [IDs.Confirm] : ConfirmScreen , 
  [IDs.ConfirmAppointmentTime] : ConfirmApScreen , 
  [IDs.YourNailsTech] : YourNailsScreen , 
  [IDs.YourService] : YourServiceScreen , 
  [IDs.CustomerInfo] : CustomerInfoScreen , 

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
