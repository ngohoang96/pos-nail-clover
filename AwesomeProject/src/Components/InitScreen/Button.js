import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import themes from '../../config/themes';
import {normalize} from '../../Utils/scales'
const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 8, 

  },
  button: {
    backgroundColor: 'white',
    width: "23%",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding : 1
  },
});

export function Button({Textstyle, lable, bg, ...props}) {
  return (
    <TouchableOpacity {...props} style={[styles.button, {backgroundColor : bg}]}>
      <Text style={[styles.text, Textstyle , {fontSize : normalize(4)}]}>{lable}</Text>
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
