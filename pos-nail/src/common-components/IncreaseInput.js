/**
 * @author: thai.nguyen
 * @date: 2018-12-31 07:59:58
 *
 *
 */
import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, } from 'react-native';
import TextCmp from './TextCmp';
import { Colors, } from '../themes';
import { normalize, } from '../utils/FontSize';

export default class IncreaseInput extends React.Component {
  _increase = () => {
    const { onIncrease, } = this.props;
    if (onIncrease) {
      onIncrease();
    }
  };

  _decrease = () => {
    const { onDecrease, } = this.props;
    if (onDecrease) {
      onDecrease();
    }
  };
  render() {
    const { ...inputProps } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnIncrease} onPress={this._decrease}>
          <TextCmp style={styles.textIncrease}>-</TextCmp>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          keyboardType={'numeric'}
          {...inputProps}
          placeholderTextColor={Colors.text}
          multiline={false}
          // spellCheck
        />
        <TouchableOpacity style={styles.btnIncrease} onPress={this._increase}>
          <TextCmp style={styles.textIncrease}>+</TextCmp>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 42,
    flexDirection: 'row',
    marginTop: 10,
  },
  btnIncrease: {
    height: 40,
    width: 40,
    backgroundColor: Colors.backgroundL2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.line,
  },
  textIncrease: {
    fontSize: 18,
    // color: '#fff',
  },
  input: {
    flex: 1,
    // flexWrap : 'nowrap',
    // whiteSpace: 'nowrap',
    // borderWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.line,
    color: Colors.text,
    padding: 5,
    textAlign: 'center',
    backgroundColor: Colors.backgroundL2,
    fontSize: normalize(13),
    fontFamily: 'Jura-SemiBold',
    maxHeight: 40,
  },
});
