import React, {Component} from 'react';
import {Text, Keyboard, TextInput, StyleSheet} from 'react-native';
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
        returnKeyType="done"
        returnKeyLabel="Done"
        onSubmitEditing={Keyboard.dismiss}
      />
    );
  }
}
const styles = StyleSheet.create({
  input: {
    padding: 5,
    width: '11%',
    borderWidth: 1,
    marginHorizontal: 3,
    alignItems: 'center',
    fontSize: normalize(3),
  },
});
