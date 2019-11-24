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
import themes from '../../config/themes';
import {Colors} from '../../themes';
import {normalize} from '../../utils/FontSize';
import {TextCmp} from '../../common-components/index';
import Logo from './logo/index';
import Label from './Label/index';
import YesNo from './yes-no/index';
import ButtonBottom from '../component-check-in/button-bottom';
export default class NewCustomer extends Component {
  static options(passprops) {
    return {
      topBar: {
        visible: false,
        drawBehind: true,
      },
    };
  }
  onPressBtn1 = () => {
    Navigation.pop('NewCustomerScreen');
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Logo></Logo>
        <Label></Label>
        <YesNo></YesNo>
        <ButtonBottom
          onPressBtn1={this.onPressBtn1}
          txtBtn1="BACK"></ButtonBottom>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});
