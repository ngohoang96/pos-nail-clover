import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { TextCmp } from '../../../../../../../themes';
import { normalize } from '../../../../../../../themes/FontSize';
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-end',
          paddingHorizontal: '5%',
        }}>
        <View style={{ flex: 1 }}>
          <TextCmp
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: normalize(5),
              marginBottom: 5,
            }}>
            First Name
          </TextCmp>
          <TextInput
            onChangeText={e => this.props.onChangeFirstName(e)}
            numberOfLines={1}
            value={this.props.valueFirstName}
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
          <View style={{ justifyContent: 'flex-start', width: '90%' }}>
            <TextCmp
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: normalize(5),
                marginBottom: 5,
              }}>
              Last Name
            </TextCmp>
          </View>
          <TextInput
            onChangeText={e => this.props.onChangeLastName(e)}
            numberOfLines={1}
            value={this.props.valueLastName}
            // placeholder={'Nhập số họ'}
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
