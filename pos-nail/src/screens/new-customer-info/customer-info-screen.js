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
import ButtonBottom from '../component-check-in/button-bottom';
import Label from './logo/index';
import Input from './input/index';
export default class CustomerInfo extends Component {
  static options(passprops) {
    return {
      topBar: {
        visible: false,
        drawBehind: true,
      },
    };
  }
  onPressBtn1 = () =>{
    Navigation.pop('welcomeScreen')
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Label></Label>
        <Input></Input>
        <ButtonBottom
          txtBtn1="BACK"
          txtBtn2="NEXT"
          onPressBtn1 = {this.onPressBtn1}
          containerStyles={{
            flex: 1,
            backgroundColor: Colors.blueBack,
          }}></ButtonBottom>

        <View style={styles.line}></View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blueBack,
  },
  line: {
    width: '70%',
    height: 3,
    backgroundColor: 'white',
    bottom: ((themes.height * 1) / 5) * 0.9,
    marginLeft: '15%',
  },
});
