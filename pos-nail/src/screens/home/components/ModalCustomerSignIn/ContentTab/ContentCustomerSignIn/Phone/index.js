import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {TextCmp} from '../../../../../../../themes';
import { normalize } from '../../../../../../../themes/FontSize';
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <TextCmp
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: normalize(5),
            marginBottom: 5,
          }}>
          Phone
        </TextCmp>
        <TextInput
          style={{
            backgroundColor: 'white',
            width: '45%',
            paddingVertical: 5,
            height: '50%',
          }}
        />
      </View>
    );
  }
}
