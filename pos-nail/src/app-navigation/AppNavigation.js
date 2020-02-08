/**
 * @author: thai.nguyen
 * @date: 2018-12-07 22:50:58
 *
 *
 */
import {Navigation} from 'react-native-navigation';

import {IDs} from '../screens';
import {Fonts, Colors} from '../themes';

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
  Navigation.setDefaultOptions({
    statusBar: {
      visible: false,
      style: 'light',
    },
    topBar: {
      buttonColor: Colors.text,
      visible: true,
      height: 50,
      background: {
        color: Colors.backgroundL1,
      },
      title: {
        color: Colors.text,
        fontFamily: Fonts.Default.bold,
      },
      backButton: {
        color: Colors.text,
      },
    },
    layout: {
      backgroundColor: Colors.backgroundL3,
    },
    bottomTab: {
      iconColor: Colors.blurWhite,
      textColor: Colors.blurWhite,
      selectedTextColor: Colors.selectedColor,
      fontFamily: Fonts.Default.regular,
    },
    bottomTabs: {
      backgroundColor: Colors.backgroundL1,
      animate: false,
      drawBehind: false,
    },
  });
};

export {
  showCommonDialog,
  dismissOverlay,
  showModal,
  dismissModal,
  changeTab,
  setDefaultOptions,
};
