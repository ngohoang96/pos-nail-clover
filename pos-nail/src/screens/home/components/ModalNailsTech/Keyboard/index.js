import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {Colors, TextCmp} from '../../../../../themes';
import {normalize} from '../../../../../themes/FontSize';
import ButtonKey from './button.key';
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _button = () => {
    return (
      <View style={{flex: 2, backgroundColor: 'gray', borderRadius: 5}}></View>
    );
  };
  render() {
    return (
      <View style={{flex: 2.5, backgroundColor: '#367FA9'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <ButtonKey backgroundColor="#DB4C3F" borderColor="#D53B2D" text="1" />
          <ButtonKey backgroundColor="#DB4C3F" borderColor="#D53B2D" text="2" />
          <ButtonKey backgroundColor="#DB4C3F" borderColor="#D53B2D" text="3" />
          <ButtonKey
            flex={3}
            backgroundColor="#408EBA"
            borderColor="#397DA4"
            text="Clock In"
            textStyle={{fontSize: normalize(6)}}
          />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <ButtonKey backgroundColor="#DB4C3F" borderColor="#D53B2D" text="4" />
          <ButtonKey backgroundColor="#DB4C3F" borderColor="#D53B2D" text="5" />
          <ButtonKey backgroundColor="#DB4C3F" borderColor="#D53B2D" text="6" />
          <ButtonKey
            flex={3}
            backgroundColor="#408EBA"
            borderColor="#397DA4"
            text="Clock Out"
            textStyle={{fontSize: normalize(6)}}
          />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <ButtonKey backgroundColor="#DB4C3F" borderColor="#D53B2D" text="7" />
          <ButtonKey backgroundColor="#DB4C3F" borderColor="#D53B2D" text="8" />
          <ButtonKey backgroundColor="#DB4C3F" borderColor="#D53B2D" text="9" />
          <ButtonKey
            flex={3}
            backgroundColor="#408EBA"
            borderColor="#397DA4"
            text="Close Out"
            textStyle={{fontSize: normalize(6)}}
          />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <ButtonKey backgroundColor="#DB4C3F" borderColor="#D53B2D" text="C" />
          <ButtonKey backgroundColor="#DB4C3F" borderColor="#D53B2D" text="0" />
          <ButtonKey backgroundColor="#DB4C3F" borderColor="#D53B2D" text="<<" />
          <ButtonKey
            flex={3}
            backgroundColor="#408EBA"
            borderColor="#397DA4"
            text="Cancel"
            textStyle={{fontSize: normalize(6)}}
          />
        </View>
      </View>
    );
  }
}

export default index;
