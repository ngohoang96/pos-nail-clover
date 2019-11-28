/**
 * @author: thai.nguyen 
 * @date: 2018-11-29 17:20:25 
 *  
 * 
 */
import { Navigation, } from 'react-native-navigation';
import { Metrics, } from '../themes';
import TransitionState from './TransitionState';
import { CommonIcons, } from '../assets';

// Extend the input params for push or showModal method
// NOTE: the order of props in this method is important since it will decide which one will be overwritten
const createCustomParams = (params, overrideModalBackButton: false) => ({
  animationType: 'fade',
  backButtonTitle: '', // Remove back button title on iOS
  title: 'OP',
  subtitle: 'SKHCN-HCMC',
  navigatorStyle: {
    navBarHidden: false,
    navBarSubtitleColor: '#fff',
    navBarSubtitleFontSize: 12,
    navBarSubTitleTextCentered: true,
  },
  
  ...params,
  passProps: {
    title: params.title, // For dynamic title passing
    overrideModalBackButton, // For close button on ios modal
    ...params.passProps,
  },
});

const createCustomParamsWithoutBack = (params, overrideModalBackButton: false) => ({
  animationType: 'fade',
  backButtonTitle: '', // Remove back button title on iOS
  navigatorStyle: {
    navBarHidden: false,
    navBarSubtitleColor: '#fff',
    navBarSubtitleFontSize: 12,
    navBarSubTitleTextCentered: true,
  },
  
  ...params,
  passProps: {
    title: params.title, // For dynamic title passing
    overrideModalBackButton, // For close button on ios modal
    ...params.passProps,
  },
});

export const createCustomPush = (componentId: string) => {
  if (!componentId) {
    throw new Error('Tried to create custom push method without a componentId');
  }

  return (params, bypassDebounce: boolean) => {
    if (!TransitionState.isTransiting() || bypassDebounce) {
      TransitionState.start();
      Navigation.push(componentId, {
        component: {
          options: {
            bottomTabs: {
              visible: false,
            },
          },
          ...params,
        },
      });
    }
  };
};

export const createCustomShowModal = (navigator: Object = Navigation) => (
  params,
  bypassDebounce: boolean
) => {
  if (!TransitionState.isTransiting() || bypassDebounce) {
    TransitionState.start();
    navigator.showModal(createCustomParams(params, Metrics.isIOS));
  }
};

export const createPopFunc = (componentId) => {
  if (!componentId) {
    throw new Error('Tried to create custom push method without a componentId');
  }
  return () => {
    Navigation.pop(componentId);
  };
};
