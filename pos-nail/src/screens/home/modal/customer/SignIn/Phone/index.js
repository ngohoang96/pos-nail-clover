import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {TextCmp} from '../../../../../../themes';

import {styles} from '../styles';

export default class Phone extends Component {
  shouldComponentUpdate({value: newValue}) {
    return newValue !== this.props.value;
  }
  onChangePhone = text => {
    this.props.onChangeText('phone', text);
  };
  render() {
    return (
      <View style={styles.wrapper_phone}>
        <TextCmp style={styles.txt_phone}>Phone</TextCmp>
        <TextInput
          keyboardType="numeric"
          onChangeText={e => this.onChangePhone(e)}
          numberOfLines={1}
          value={this.props.value}
          style={styles.input_name}
          onEndEditing={this.props.onEndEditing}
        />
      </View>
    );
  }
}
