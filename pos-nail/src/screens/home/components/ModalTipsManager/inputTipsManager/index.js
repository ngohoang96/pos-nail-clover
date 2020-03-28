import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {TextCmp} from '../../../../../themes';
import {normalize} from '../../../../../themes/FontSize';

export class index extends Component {
  render() {
    const {valueTipsManager} = this.props;
    let tmp = '';
    for (let i = 0; i < valueTipsManager.length; ++i) {
      tmp += '*';
    }
    return (
      <View style={{flex: 1, paddingLeft: 5, backgroundColor: '#fff'}}>
        <TextCmp
          style={{
            flex: 1,
            paddingVertical: 5,
            fontSize: normalize(6),
            textAlignVertical: 'center',
            color: tmp != '' ? 'black' : 'gray',
          }}>
          {tmp || 'Office Password'}
        </TextCmp>
      </View>
    );
  }
}

export default index;
