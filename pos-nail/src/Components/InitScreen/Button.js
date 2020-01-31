/*  header-comment
/*  file   : Button
/*  author : Bon
/*  date   : 2020-1-1 9:39:46
/*  last   : 2020-1-2 9:49:16
*/
import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import themes from '../../config/themes';
import {normalize} from '../../themes/FontSize';
import {TextCmp} from '../../themes';
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: normalize(3),
  },
  button: {
    backgroundColor: 'white',
    width: '24%',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
  },
});

export function Button({Textstyle, lable, bg, ...props}) {
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.button,
        {
          backgroundColor: bg,
          borderWidth: 0.3,
          borderColor: '#383E44',
          padding: 2,
        },
      ]}>
      <TextCmp style={[styles.text, Textstyle]}>{lable}</TextCmp>
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
