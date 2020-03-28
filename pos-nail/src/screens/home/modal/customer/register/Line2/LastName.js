import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';

import {TextCmp} from '../../../../../../themes';
import {normalize} from '../../../../../../themes/FontSize';

export class LastName extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-end', marginLeft: 10}}>
        <TextCmp
          style={{
            fontSize: normalize(5),
            fontWeight: 'bold',
          }}>
          Last Name *
        </TextCmp>
        <TextInput
          value={this.props.valueLastName}
          onChangeText={e => this.props.onChangeLastName(e)}
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

export default LastName;
