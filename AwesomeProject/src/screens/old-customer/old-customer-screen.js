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
import Logo from './logo/index';
import Label from './Label/index';
import InputPhone from './InputPhone/index';
import Button from './button/index';
import Keyboard from './keyboard/index'
export default class OldCustomer extends Component {
  static options(passprops) {
    return {
      topBar: {
        visible: false,
        drawBehind: true,
      },
    };
  }
  onPressBack = () => {
    Navigation.pop('NewCustomerScreen')
  };
  onPressNext = () => {
    alert('next');
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Logo></Logo>
        <Label></Label>
        <View style={styles.conainerBtnKB}>
          <View style={styles.containerBtnBack}>
            <Button
              style={styles.btnBack}
              onPressBack={this.onPressBack}
              label={'BACK'}></Button>
          </View>
        <Keyboard></Keyboard>
          <View style={styles.containerBtnNext}>
            <Button
              style={styles.btnNext}
              onPressBack={this.onPressNext}
              label={'NEXT'}></Button>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  conainerBtnKB: {flex: 4, flexDirection: 'row', marginTop: 3},
  containerBtnBack: {
    flex: 0.5,
    backgroundColor: 'white',
    padding: 5,
    justifyContent: 'flex-end',
  },
  btnBack: {
    width: '100%',
    height: '15%',
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBtnNext: {
    flex: 0.5,
    backgroundColor: 'white',
    padding: 5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  btnNext: {
    width: '100%',
    height: '15%',
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
