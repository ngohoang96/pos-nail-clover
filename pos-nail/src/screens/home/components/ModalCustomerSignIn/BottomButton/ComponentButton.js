import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {TextCmp} from '../../../../../themes';
import {normalize} from '../../../../../themes/FontSize';

export default (props = {}) => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      {...props}
      style={[styles.btn, props.styleButton]}>
      <TextCmp style={[styles.text, props.styleText]}>{props.text}</TextCmp>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    width: '15%',
    height: '50%',
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: normalize(5),
  },
});
