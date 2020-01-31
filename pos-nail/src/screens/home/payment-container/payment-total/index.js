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
import {TextCmp} from '../../../../themes';

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
          maxHeight: 25,
        }}>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flex: 2,
          }}>
          <TextCmp
            style={{
              alignItems: 'center',
              color: '#383E44',

              fontSize: normalize(5),
              fontWeight: 'bold',
            }}>
            Total
          </TextCmp>
        </View>
        <View style={{flex: 6}}></View>
        <View
          style={{
            borderWidth: 0.5,
            padding: 2,
            flex: 2,
            maxHeight: 15,
            maxWidth: 30,
          }}>
          <TextCmp
            style={{
              color: '#383E44',
              textAlign: 'right',
              fontSize: normalize(3.5),
            }}>
            $0
          </TextCmp>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
