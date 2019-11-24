import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import {Navigation} from 'react-native-navigation'
import themes from '../../config/themes';
import {Colors} from '../../themes';
import {normalize} from '../../utils/FontSize';
import {TextCmp} from '../../common-components/index';
import Logo from '../component-check-in/logo';
import Label from '../component-check-in/label';
import YesNo from './yes-no/index';
import ButtonBottm from '../component-check-in/button-bottom'
export default class NewCustomer extends Component {
  static options(passprops) {
    return {
      topBar: {
        visible: false,
        drawBehind: true,
      },
    };
  }
  onPressBtn1 = ()=>{
    
    Navigation.pop('NewCustomerScreen')
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Logo></Logo>
        <Label
          labelStyle={styles.labelStyle}
          containerStyle={styles.containerStyle}
          label="Are you new customer?"></Label>
        <YesNo></YesNo>
        <ButtonBottm onPressBtn1 = {this.onPressBtn1} containerStyles = {{flex : 2}} txtBtn1 = "BACK"></ButtonBottm>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', paddingBottom: 20},
  labelStyle: {
    color: 'black',
    fontSize: 28,
  },
  containerStyle: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingLeft: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
