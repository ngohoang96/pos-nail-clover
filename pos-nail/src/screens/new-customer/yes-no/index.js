import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import themes from '../../../config/themes';
import {Colors} from '../../../themes';
import {normalize} from '../../../utils/FontSize';
import {TextCmp} from '../../../common-components/index';

export default class YesNo extends Component {
  onPressNo = () => {
    Navigation.push('NewCustomerScreen', {
      component: {
        name: 'OldCustomerScreen',
        options: {},
        passProps: {},
      },
    });
  };
  onPressYes = () => {
    Navigation.push('NewCustomerScreen', {
      component: {
        name: 'ConfirmScreen',
        options: {},
        passProps: {},
      },
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: '20%'}}></View>
        <View style={styles.containerYes}>
          <TouchableOpacity  onPress={this.onPressYes} activeOpacity={0.7} style={styles.btnYes}>
            <TextCmp style={styles.txtYes}>YES</TextCmp>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onPressNo}
            activeOpacity={0.7}
            style={styles.btnNo}>
            <TextCmp style={styles.txtNo}>NO</TextCmp>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 5, backgroundColor: 'white'},
  containerYes: {
    height: '25%',
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  btnYes: {
    backgroundColor: Colors.darkBlue,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtYes: {color: 'white', fontSize: normalize(10)},
  btnNo: {
    backgroundColor: Colors.blue,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  txtNo: {color: 'white', fontSize: normalize(10)},
});
