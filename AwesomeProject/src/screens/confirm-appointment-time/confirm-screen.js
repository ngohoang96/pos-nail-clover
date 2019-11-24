import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import themes from '../../config/themes';
import {Colors} from '../../themes';
import {normalize} from '../../utils/FontSize';
import {TextCmp} from '../../common-components/index';
import Logo_ from '../component-check-in/logo';
import Label_ from '../component-check-in/label';
import ButtonBottom from '../component-check-in/button-bottom'
import ButtonLine1 from './button-line-1/index';
import Button from './button-line-1/btn';
import { Navigation } from 'react-native-navigation';

export default class ConfirmAppointmentTime extends Component {
  static options(passprops) {
    return {
      topBar: {
        visible: false,
        drawBehind: true,
      },
    };
  }
  onPressPedicure = () => {
    alert('pedicure');
  };
  onPressBtn1 = () =>{
    Navigation.pop('NewCustomerScreen');
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Logo_></Logo_>
        <Label_
          labelStyle={styles.labelStyle}
          containerStyle={styles.containerStyle}
          label="PLEASE CONFIRM YOUR APPOINTMENT TIME"></Label_>
        <View style={styles.containerBtn}>
          <ButtonLine1></ButtonLine1>
          <Button
            onPress={this.onPressPedicure}
            label={'PEDICURE DELUXE'}
            style={styles.btnPedicure}></Button>
        </View>
        <ButtonBottom onPressBtn1 = {this.onPressBtn1} txtBtn1 = "BACK" txtBtn2 = "CHECK IN"></ButtonBottom>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'red'},
  containerBtn: {flex: 3, backgroundColor: 'white', paddingVertical: 10},
  btnPedicure: {backgroundColor: Colors.orange, marginTop: 10},
  labelStyle : {
    color: 'black',
    fontSize: 28,
  } , 
  containerStyle : {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    paddingLeft: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
