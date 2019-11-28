import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import themes from '../../../../config/themes';
import {Colors} from '../../../../themes';
import {normalize} from '../../../../utils/FontSize';
import {TextCmp} from '../../../../common-components/index';

import { Navigation } from "react-native-navigation";
export default class Customer extends Component {
  onPressGuest = () => {
    Navigation.push("welcomeScreen", {
      component: {
        name: "NewCustomerScreen",
        options: {},
        passProps: {
        
        }
      }
    });
  };
  render() {
    return (
      <TouchableOpacity
        onPress={this.onPressGuest}
        activeOpacity={0.7}
        style={styles.containerCus}>
        <TextCmp style={styles.txtCus}>Customer-Guest Check in</TextCmp>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerCus: {
    height: '30%',
    width: '50%',
    backgroundColor: '#F48210',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtCus: {fontSize: normalize(themes.H10), color: 'white'},
});
