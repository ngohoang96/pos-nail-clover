/**
 * @author: thai.nguyen
 * @date: 2018-12-07 22:28:51
 *
 *
 */
import React from 'react';
import { Text, StyleSheet, } from 'react-native';
import { Colors, Fonts, } from '../themes/index';
import { normalize, } from '../utils/FontSize';
export default (props = {}) => {
  return (
    <Text {...props} style={[styles.text, props.style,]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.text,
    fontFamily: 'Jura-DemiBold',
    fontSize: normalize(15),
  },
});
