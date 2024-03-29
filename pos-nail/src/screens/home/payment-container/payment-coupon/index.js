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

export default class PaymentCoupon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapper_type}>
          <TextCmp style={styles.text}>Coupon</TextCmp>
        </View>
        <View style={styles.center_view}>
          <View style={styles.coupon}></View>
        </View>
        <View style={styles.wrapper_cash}>
          <TextCmp style={styles.txt_cash}></TextCmp>
        </View>
      </View>
    );
  }
}
