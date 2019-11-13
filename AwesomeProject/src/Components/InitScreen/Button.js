import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import themes from '../../config/themes';
const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 12,
  },
  button: {
    backgroundColor: 'white',
    height: 30,
    width: (themes.width * 1) / 16 - 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export function Button({Textstyle, lable, bg, ...props}) {
  return (
    <TouchableOpacity {...props} style={[styles.button, {backgroundColor : bg}]}>
      <Text style={[styles.text, Textstyle]}>{lable}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  Textstyle: Text.propTypes.style,
  lable: PropTypes.string,
  bg: PropTypes.string,
};

Button.defaultProps = {
  Textstyle: {},
  lable: '',
  bg: 'white',
};
