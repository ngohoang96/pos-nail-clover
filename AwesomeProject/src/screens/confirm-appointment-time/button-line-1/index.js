import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import themes from '../../../config/themes';
import {Colors} from '../../../themes';
import {normalize} from '../../../utils/FontSize';
import {TextCmp} from '../../../common-components/index';
import Button from './btn';
export default class ButtonLine1 extends Component {
  onPressTime = () => {
    alert('time');
  };
  onPressNails = () => {
    alert('nails');
  };
  render() {
    return (
      <View style={styles.containerBtnLine1}>
        <Button onPress={this.onPressTime} label={'11:00 AM'}></Button>
        <Button
          onPress={this.onPressNails}
          label={'NAILS TECH: DONNA TRAN'}
          style={{marginLeft: 3}}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerBtnLine1: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
});
