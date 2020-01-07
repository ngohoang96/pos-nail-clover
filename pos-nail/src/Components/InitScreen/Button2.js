import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import themes from '../../config/themes';
import { normalize } from '../../themes/FontSize';
import { TextCmp } from '../../themes';

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: normalize(4),
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    height: 40,
    width: '100%',
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    justifyContent: 'center',
    paddingLeft: 10,
    marginTop: 5,
    borderTopColor: '#383E44',
    borderTopWidth: 1,
    borderRightColor: '#383E44',
    borderRightWidth: 1,
    borderBottomColor: '#383E44',
    borderBottomWidth: 1,

  },
});

export default class Button2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onPress } = this.props
    return (
      <TouchableOpacity
        activeOpacity={.5}
        style={[
          styles.button,
          { borderLeftWidth: 4, ...this.props.style_button },
        ]}
        onPress={() => onPress()}
      >
        <TextCmp style={[styles.text, this.props.textstyles]}>
          {this.props.lable}
        </TextCmp>
      </TouchableOpacity>
    );
  }
}
