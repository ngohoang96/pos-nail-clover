import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import themes from '../../config/themes';
import {normalize} from '../../themes/FontSize';
import {TextCmp} from '../../themes';

const styles = StyleSheet.create({
  text: {
    // color: 'black',
    fontSize: normalize(3),
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    height: '100%',
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class Button2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {onPress} = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={[
          styles.button,
          {borderLeftWidth: 1, ...this.props.style_button},
        ]}
        onPress={() => onPress()}>
        <TextCmp style={[styles.text]}>{this.props.lable}</TextCmp>
      </TouchableOpacity>
    );
  }
}
