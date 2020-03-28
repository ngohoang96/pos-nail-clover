import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import {TextCmp} from '../../../../../../themes';
import {normalize} from '../../../../../../themes/FontSize';

export default class Address extends Component {
  render() {
    return (
      <View style={{flex: 1, marginLeft: 30, justifyContent: 'flex-end'}}>
        <TextCmp
          style={{
            fontSize: normalize(5),
            fontWeight: 'bold',
          }}>
          Address
        </TextCmp>
        <TextInput
          value={this.props.valueAddress}
          onChangeText={e => this.props.onChangeAddress(e)}
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
