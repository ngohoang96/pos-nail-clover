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
import Label from '../component-check-in/label';
import SeclectYourNailsTech from '../component-check-in/select-your-prefenails';
import ButtonBottom from '../component-check-in/button-bottom';
import Logo from '../component-check-in/logo';
export default class YourService extends Component {
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
        <Label
          containerStyle={styles.containerLabelStyle}
          labelStyle={styles.labelStyle}
          label={'PLEASE SELECT YOUR PREFER SERVICES!'}></Label>
        <SeclectYourNailsTech></SeclectYourNailsTech>
        <ButtonBottom
          onPressBtn1={this.onPressBtn1}
          onPressBtn2={() => {
            alert('d');
          }}
          txtBtn1="BACK"
          txtBtn2="NEXT"></ButtonBottom>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerLabelStyle: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {color: 'black', fontSize: normalize(10)},
});
