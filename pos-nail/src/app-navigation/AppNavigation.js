/**
 * @author: thai.nguyen
 * @date: 2018-12-07 22:50:58
 *
 *
 */
import {Navigation} from 'react-native-navigation';
import {Platform} from 'react-native';
import {IDs} from '../screens';
import {Fonts, Colors} from '../themes';
import {CommonIcons} from '../assets';

const showCommonDialog = ({
  title,
  desc,
  cancelText,
  submitText,
  onCancel,
  onSubmit,
  renderContent,
  tapToDismiss = true,
}) => {
  Navigation.showOverlay({
    component: {
      id: IDs.OverlayComponent,
      name: IDs.OverlayComponent,
      passProps: {
        tapToDismiss,
        title,
        desc,
        cancelText,
        submitText,
        onCancel,
        onSubmit,
        renderContent,
      },
      options: {
        overlay: {
          interceptTouchOutside: false,
        },
        layout: {
          backgroundColor: 'transparent',
        },
      },
    },
  });
};

const dismissOverlay = componentID => {
  Navigation.dismissOverlay(componentID);
};

const showModal = params => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            options: {
              topBar: {
                visible: false,
              },
            },
            ...params,
          },
        },
      ],
    },
  });
};

const dismissModal = componentID => {
  Navigation.dismissModal(componentID);
};

const changeTab = tabIndex => {
  Navigation.mergeOptions('BottomTabsId', {
    bottomTabs: {
      currentTabIndex: tabIndex,
    },
  });
};

const setDefaultOptions = () => {
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

    defautOptions = {
      animations: {
        push: pushAnimations,
        pop: popAnimations,
      },
      layout: {
        orientation: ['landscape'], // An array of supported orientations
      },
    };
    Navigation.setDefaultOptions(defautOptions);
  }
};

export {
  showCommonDialog,
  dismissOverlay,
  showModal,
  dismissModal,
  changeTab,
  setDefaultOptions,
};
