/*  header-comment
/*  file   : Button
/*  author : Bon
/*  date   : 2020-1-1 9:39:46
/*  last   : 2020-1-5 22:56:12
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
    fontSize: normalize(4),
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#F0F0F0',
    width: '24%',
    borderRadius: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    // paddingVertical: 1
  },
});

export function Button({Textstyle, lable, containerStyle, bg, ...props}) {
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.button,
        {
          backgroundColor: bg,
          borderWidth: 0.3,
          borderColor: '#383E44',
        },
        containerStyle,
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
