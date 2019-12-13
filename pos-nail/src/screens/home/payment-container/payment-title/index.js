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
export default class PaymentTitle extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 0.65, backgroundColor: 'white', overflow: 'hidden'}}>
        <View
          style={{
            flex: 0.65,
            backgroundColor: 'white',
            overflow: 'hidden',
            padding: 3,
            justifyContent: 'center',
          }}>
          <TextCmp
            style={{
              alignItems: 'center',
              color: '#383E44',
              fontWeight: 'bold',
              fontSize : normalize(5)
            }}>
            Payment Cart
          </TextCmp>
        </View>
        <View
          style={{
            flex: 0.6,
            backgroundColor: '#F5F5F5',
            borderBottomWidth: 1,
            borderBottomColor: '#878787',
            padding: 3,
            justifyContent: 'center',
          }}>
          <TextCmp style={{alignItems: 'center', color: '#383E44',
          fontSize : normalize(4)}}>
            Service
          </TextCmp>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
