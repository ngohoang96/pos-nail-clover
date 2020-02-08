import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../themes/index';
import {normalize} from './FontSize';

export default (props = {}) => {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.colorOpacity(9),
    flexWrap: 'wrap',
    fontSize: normalize(4),
  },
});
