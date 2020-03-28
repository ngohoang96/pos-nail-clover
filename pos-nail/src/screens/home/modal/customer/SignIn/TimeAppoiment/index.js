import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

import {styles} from '../styles';
import {TextCmp} from '../../../../../../themes';
export default class TimeAppoiment extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {value: ''};
  // }

  render() {
    return (
      <View style={styles.wrapper_timeappoiment}>
        <TextCmp style={styles.txt_confirmtime}>Confirm Time Appoiment</TextCmp>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            paddingVertical: 5,
            height: '50%',
          }}
        />
      </View>
    );
  }
}
