/**
 * @format
 */
import {Navigation} from 'react-native-navigation';

import {Platform} from 'react-native';

import App from './src/initScreen';
import Welcome from './src/screens/welcome/welcome-screen';
import NewCustomer from './src/screens/new-customer/new-customer-screen';
import OldCustomer from './src/screens/old-customer/old-customer-screen';
import Confirm from './src/screens/confirm-apppointment/confirm-appointment-screen';
import ConfirmAppointmentTiem from './src/screens/confirm-appointment-time/confirm-screen';
import YourNailsTech from './src/screens/your-nails-tech/your-nails-tech-screen';
import YourService from './src/screens/your-prefer-service/your-service-screen';
import CustomerInfo from './src/screens/new-customer-info/customer-info-screen';
Navigation.registerComponent(`welcomeScreen`, () => Welcome);
Navigation.registerComponent(`NewCustomerScreen`, () => NewCustomer);
Navigation.registerComponent(`OldCustomerScreen`, () => OldCustomer);
Navigation.registerComponent(`ConfirmScreen`, () => Confirm);
Navigation.registerComponent(`YourNailsTechScreen`, () => YourNailsTech);
Navigation.registerComponent(`YourServiceScreen`, () => YourService);
Navigation.registerComponent(`CustomerInfoScreen`, () => CustomerInfo);
Navigation.registerComponent(`AppScreen`, () => App);
Navigation.registerComponent(
  `ConfirmAppointmentTimeScreen`,
  () => ConfirmAppointmentTiem,
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    // Title
    navBarTextColor: '#fff',
    navBarTextFontSize: 17,

    navBarButtonColor: '#fff',
    navBarHidden: true,
    screenBackgroundColor: 'transparent',

    drawUnderTabBar: false,
    orientation: 'landscape', // Force orientation

    // iOS only
    // Do not allow user to swipe back on iOS
    disabledBackGesture: true,

    // Android only
    statusBarColor: 'white',
    navBarTitleTextCentered: true, // Center the title on Android (default align left)
  });
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: 'AppScreen',
              name: 'AppScreen',
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
            component: {
              id: 'CustomerInfoScreen',
              name: 'CustomerInfoScreen',
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
            component: {
              id: 'YourServiceScreen',
              name: 'YourServiceScreen',
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
            component: {
              id: 'YourNailsTechScreen',
              name: 'YourNailsTechScreen',
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
            component: {
              id: 'ConfirmAppointmentTimeScreen',
              name: 'ConfirmAppointmentTimeScreen',
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
            component: {
              id: 'ConfirmScreen',
              name: 'ConfirmScreen',
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
            component: {
              id: 'OldCustomerScreen',
              name: 'OldCustomerScreen',
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
            component: {
              id: 'NewCustomerScreen',
              name: 'NewCustomerScreen',
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
          },

          {
            component: {
              id: 'welcomeScreen',
              name: 'welcomeScreen',
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
          },
        ],
      },
    },
  });
  if (Platform.OS !== 'ios') {
    const pushAnimations = {
      content: {
        x: {
          from: 1000,
          to: 0,
          duration: 400,
        },
      },
    };

    const popAnimations = {
      content: {
        x: {
          from: 0,
          to: 1000,
          duration: 400,
          interpolation: 'accelerate',
        },
      },
    };

    const defautOptions = {
      animations: {
        push: pushAnimations,
        pop: popAnimations,
      },
    };

    Navigation.setDefaultOptions(defautOptions);
  }
});
