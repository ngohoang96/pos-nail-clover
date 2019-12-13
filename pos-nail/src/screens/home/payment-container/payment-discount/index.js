import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';

import themes from '../../../../config/themes';
import {normalize} from '../../../../themes/FontSize';
import TextCmp from '../../../../themes/TextCmp';
export default class PaymentDiscount extends Component {
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
          marginTop: 2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
            paddingRight: 10,
          }}>
          <TextCmp
            style={{
              alignItems: 'center',
              color: '#383E44',
              flex: 1,
              fontSize : normalize(3.5)
            }}>
            Discount(%)
          </TextCmp>
          <TextInput
            style={{
              width: '100%',
              borderWidth: 0.5,
              borderColor: '#BEBEBE',
              paddingVertical: -5,
              flex: 0.6,
              fontSize : normalize(3.5),
              marginBottom: 1,
            }}></TextInput>

          <TextCmp
            style={{
              alignItems: 'center',
              color: '#383E44',
              flex: 1.1,
              fontSize : normalize(3.5)
            }}>
            (Fix amount)
          </TextCmp>
        </View>

        <View style={{flex: 0.3}}>
          <TextCmp
            style={{
              alignItems: 'center',
              color: '#383E44',
              textAlign: 'right',
              fontSize : normalize(3.5)
            }}>
            ($0.00)
          </TextCmp>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
