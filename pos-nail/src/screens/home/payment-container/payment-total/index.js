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
import { TextCmp } from '../../../../themes';

export default class PaymentCoupon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View style={{ flex: 1 }}>
          <TextCmp
            style={{
              alignItems: 'center',
              color: '#383E44',
              fontWeight: 'bold',
              fontSize: normalize(3.5)
            }}>
            Total
          </TextCmp>
        </View>
        <View style={{ flex: 0.3 }}>
          <TextCmp
            style={{
              color: 'black',
              textAlign: 'right',
              fontWeight: 'bold',
              fontSize: normalize(3.5)
            }}>
            $64.0
          </TextCmp>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
