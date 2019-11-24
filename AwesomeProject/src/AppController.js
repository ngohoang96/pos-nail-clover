/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { Navigation, } from 'react-native-navigation';

import ScreenIDs from './screens/ScreenIDs';
export const startHome = () => {
  Navigation.setRoot({
    root: {
        stack: {
            children: [
              {
                component: {
                  name: ScreenIDs.Home,
                  passProps: {
                    text: 'data',
                  },
                },
              },
            ],
            options: {
              topBar: {
                title: {
                  text: 'Home',
                  color: 'red',
                },
                background: {
                  color: 'white',
                },
              },
           
            },
          },
    },
  });
};
