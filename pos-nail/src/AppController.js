/**
 * @author: thai.nguyen
 * @date: 2018-11-29 17:29:22
 *
 *
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
              id: ScreenIDs.Home,
              name: ScreenIDs.Home,
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
