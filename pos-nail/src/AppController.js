/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {Navigation} from 'react-native-navigation';

import ScreenIDs from './screens/ScreenIDs';
export const startHome = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: 'InitId',
              name: ScreenIDs.Init,
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
            component: {
              id: 'CustomerInfoId',
              name: ScreenIDs.CustomerInfo,
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
            component: {
              id: 'YourServiceId',
              name: ScreenIDs.YourService,
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
            component: {
              id: 'YourNailsTechId',
              name: ScreenIDs.YourNailsTech,
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
            component: {
              id: 'ConfirmApTimeId',
              name: ScreenIDs.ConfirmAppointmentTime,
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
            component: {
              id: 'ConfirmId',
              name: ScreenIDs.Confirm,
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
            component: {
              id: 'OldCustomerId',
              name: ScreenIDs.OldCustomer,
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
            component: {
              id: 'NewCustomerId',
              name: ScreenIDs.NewCustomer,
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
            component: {
              id: 'welcomeId',
              name: ScreenIDs.Welcome,
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
};
