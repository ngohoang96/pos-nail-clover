import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

import {Colors, TextCmp} from '../../../../../themes';
import {normalize} from '../../../../../themes/FontSize';
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 0.6, backgroundColor: 'white'}}>
        <TextInput
          style={{flex: 1, paddingVertical: 5,fontSize : normalize(6)}}
          placeholder="Staff PIN Code/Office password"></TextInput>
      </View>
    );
  }
}

export default index;
