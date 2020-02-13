import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import {TextCmp} from '../../../../../../themes';
import {normalize} from '../../../../../../themes/FontSize';

export class RefferalCode extends Component {
  render() {
    return (
      <View style={{flex: 1, marginLeft: 30, justifyContent: 'flex-end'}}>
        <TextCmp
          style={{
            fontSize: normalize(5),
            fontWeight: 'bold',
          }}>
          Referral Code
        </TextCmp>
        <TextInput
          value={this.props.valueRefferalCode}
          onChangeText={e => this.props.onChangeRefferalCode(e, 2)}
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

export default RefferalCode;
