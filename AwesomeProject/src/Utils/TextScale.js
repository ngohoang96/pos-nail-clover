import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import themes from '../config/themes';
import {normalize} from './scales'
const styles = StyleSheet.create({
  text: {
    color: themes.colors.textColor,
    fontSize: normalize(8), 
  },
});

export function TextScale({Textstyle,font,lable, ...props}) {
  return (
      <Text style={[styles.text, Textstyle , {fontSize : normalize(font)}]}>{lable}</Text>
  );
}

TextScale.propTypes = {
  Textstyle: Text.propTypes.style,
  lable: PropTypes.string,
  font: PropTypes.number
};

TextScale.defaultProps = {
  Textstyle: {},
  lable: '',
  font : 8
};
