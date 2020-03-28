import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import {styles} from '../styles';
import {Colors} from '../../../../themes';
import {normalize} from '../../../../themes/FontSize';
export default class InputTips extends Component {
  render() {
    const {value, onChangeValue, onEndEditing} = this.props;
    return (
      <TextInput
        style={[
          styles.coupon,
          {fontSize: normalize(4), padding: 0, paddingLeft: 3},
        ]}
        value={value}
        onChangeText={onChangeValue}
        keyboardType="numeric"
        onEndEditing={value => onEndEditing(value)}
      />
    );
  }
}
