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
import {styles} from '../styles';
export default class PaymentDiscount extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapper_type}>
          <TextCmp style={styles.text}>Discount </TextCmp>
        </View>
        <View style={[styles.center_view, {flexDirection: 'row'}]}>
          <View
            style={[styles.first_card, {borderWidth: 0, flexDirection: 'row'}]}>
            <View style={styles.box_discount}>
              <TextCmp style={[styles.text, {textAlign: 'right'}]}>%</TextCmp>
            </View>
            <View style={styles.box_fixamount}>
              <TextCmp style={styles.txt_fixamount}>Fix Amount</TextCmp>
            </View>
          </View>
          <View style={styles.second_card}>
            <TextCmp style={[styles.text, {textAlign: 'right'}]}>$</TextCmp>
          </View>
        </View>
        <View style={styles.wrapper_cash}>
          <TextCmp style={styles.txt_cash}>$0</TextCmp>
        </View>
      </View>
    );
  }
}
