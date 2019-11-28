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
import themes from '../../../../config/themes';
import {Colors} from '../../../../themes';
import {normalize} from '../../../../utils/FontSize';
import {TextCmp} from '../../../../common-components/index';
export default class Employee extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          Navigation.push('NewCustomerScreen', {
            component: {
              name: 'AppScreen',
              options: {},
              passProps: {},
            },
          });
        }}
        style={styles.containerEmployee}>
        <TextCmp style={styles.txtEmployee}>Employee</TextCmp>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerEmployee: {
    flex: 1,
    backgroundColor: '#189FBF',
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtEmployee: {fontSize: normalize(themes.H8), color: 'white'},
});
