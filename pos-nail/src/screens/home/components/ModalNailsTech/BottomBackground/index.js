import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {Colors, TextCmp} from '../../../../../themes';
import {normalize} from '../../../../../themes/FontSize';
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 0.7,
          backgroundColor: '#397DA4',
          paddingLeft: 10,
          justifyContent: 'center',
        }}></View>
    );
  }
}

export default index;
