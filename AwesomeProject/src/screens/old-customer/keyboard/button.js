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

export default (props = {}) => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.containerBtn, props.containerStyle]}>
      <TextCmp style={[styles.txt, props.textStyles]}>{props.text}</TextCmp>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  containerBtn: {
    width: '15%',
    height: '100%',
    backgroundColor: '#174B47',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#308A85',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {color: 'white', fontSize: normalize(10)},
});
