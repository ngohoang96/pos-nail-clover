import Toast from 'react-native-root-toast';

export default class ToastLib {
  static show(msg) {
    Toast.show(msg, {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
      shadow: false,
      animation: true,
      hideOnPress: true,
      backgroundColor: '#000000',
      textColor: '#ffffff',
      delay: 0
    });

    // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
    // setTimeout(function() {
    //   Toast.hide(toast);
    // }, 500);
  }
}
