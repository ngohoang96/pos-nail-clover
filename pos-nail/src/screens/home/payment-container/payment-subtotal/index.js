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
export default class PaymentSubtotal extends Component {
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
        <TextCmp
          style={{
            alignItems: 'center',
            color: '#383E44',
            flex: 1,
            fontSize: normalize(3.5),
          }}>
          Subtotal
        </TextCmp>

        <TextCmp
          style={{
            color: '#383E44',
            flex: 0.3,
            textAlign: 'right',
            fontSize: normalize(3.5),
          }}>
          ($0.00)
        </TextCmp>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
