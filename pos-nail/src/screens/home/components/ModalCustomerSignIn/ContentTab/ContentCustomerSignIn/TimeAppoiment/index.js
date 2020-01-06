import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { TextCmp } from '../../../../../../../themes';
import { normalize } from '../../../../../../../themes/FontSize';
export default class index extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {value: ''};
  // }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TextCmp
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: normalize(5),
            marginBottom: 5,
          }}>
          Confirm Time Appoiment
        </TextCmp>
        <View
          // onChangeText={e => this.props.onChangePhone(e)}
          // numberOfLines={1}
          // value={this.props.value}
          // placeholder={'Nhập số điện thoại'}
          style={{
            backgroundColor: 'white',
            width: '100%',
            paddingVertical: 5,
            height: '50%',
          }}
        />
      </View>
    );
  }
}
