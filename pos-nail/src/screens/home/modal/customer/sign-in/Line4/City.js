import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import {TextCmp} from '../../../../../../themes';
import {normalize} from '../../../../../../themes/FontSize';

export class City extends Component {
  render() {
    return (
      <View style={{flex: 1, marginLeft: 30, justifyContent: 'flex-end'}}>
        <TextCmp
          style={{
            fontSize: normalize(5),
            fontWeight: 'bold',
          }}>
          City
        </TextCmp>
        <TextInput
          value={this.props.valueCity}
          onChangeText={e => this.props.onChangeCity(e)}
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

export default City;
