import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

import {normalize} from '../../../../../../themes/FontSize';
import {TextCmp} from '../../../../../../themes';
import {styles} from '../styles';

export default class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeText = (key, value) => {
    this.props.onChangeText(key, value);
  };

  render() {
    const {firstName, lastName} = this.props;
    return (
      <View style={styles.wrapper_name}>
        <View style={{flex: 1}}>
          <TextCmp style={styles.txt_firstname}>First Name</TextCmp>
          <TextInput
            onChangeText={e => this.onChangeText('firstName', e)}
            numberOfLines={1}
            value={firstName}
            // placeholder={'Nhập số tên'}
            style={{
              backgroundColor: 'white',
              width: '90%',
              paddingVertical: 5,
              height: '50%',
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <View style={{justifyContent: 'flex-start', width: '90%'}}>
            <TextCmp style={styles.txt_lastname}>Last Name</TextCmp>
          </View>
          <TextInput
            onChangeText={e => this.onChangeText('lastName', e)}
            numberOfLines={1}
            value={lastName}
            style={{
              backgroundColor: 'white',
              width: '90%',
              paddingVertical: 5,
              height: '50%',
            }}
          />
        </View>
      </View>
    );
  }
}
