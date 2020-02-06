import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {normalize} from '../themes/FontSize';

export default class Input extends Component {
  render() {
    const {...inputProps} = this.props;
    return (
      <TextInput
        style={styles.input}
        keyboardType={'numeric'}
        {...inputProps}
        blurOnSubmit={false}
      />
    );
  }
}
const styles = StyleSheet.create({
  input: {
    width: '11%',
    height: 30,
    borderWidth: 1,
    marginHorizontal: 3,
    alignItems: 'center',
    fontSize: normalize(3),
  },
});
