import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';

import {TextCmp} from '../../../../../../themes';
import {normalize} from '../../../../../../themes/FontSize';
export class Phone extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <TextCmp
          style={{
            fontSize: normalize(5),
            fontWeight: 'bold',
          }}>
          Phone *
        </TextCmp>
        <TextInput
          keyboardType="numeric"
          keyboardAppearance="light"
          value={this.props.valuePhone}
          onChangeText={e => this.props.onChangePhone(e, 1)}
          style={{
            width: '100%',
            height: '50%',
            backgroundColor: 'white',
            marginTop: 5,
          }}
        />
      </View>
    );
  }
}

export default Phone;
