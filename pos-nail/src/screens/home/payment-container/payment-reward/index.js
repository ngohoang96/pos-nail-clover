import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';

import themes from '../../../../config/themes';
import { normalize } from '../../../../themes/FontSize';

import { styles_home } from '../../styles-home';
import { TextCmp } from '../../../../themes';
export default class PaymentReward extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 1,
          flex: 1,
        }}>
        <View style={[styles_home.container2, { paddingRight: 10, flex: 1 }]}>
          <TextCmp
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
              fontSize: normalize(3.5)
            }}>
            Reward
          </TextCmp>

          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '70%',
              borderWidth: 0.5,
              borderColor: '#BEBEBE',
              padding: 1,

              backgroundColor: '#EEEEEE',
              flex: 0.8,
              marginLeft: 3,
            }}>
            <TextCmp style={{
              color: 'black',
              fontSize: normalize(3.5)
            }}>($0.00)</TextCmp>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 0.5,
              borderColor: '#BEBEBE',
              padding: 1,

              marginLeft: 3,
              backgroundColor: 'white',
              flex: 0.8,
              width: '75%',
            }}>
            <TextCmp style={{
              fontSize: normalize(3.5)
            }}>Redoom</TextCmp>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 0.3 }}>
          <TextCmp style={{
            color: '#383E44', textAlign: 'right',
            fontSize: normalize(3.5)
          }}>
            ($0.00)
          </TextCmp>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
