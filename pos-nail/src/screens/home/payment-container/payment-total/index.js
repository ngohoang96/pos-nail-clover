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
  shouldComponentUpdate({total: newTotal}) {
    return newTotal !== this.props.total;
  }
  render() {
    const {total} = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapper_type}>
          <TextCmp
            style={[styles.text, {fontSize: normalize(6), fontWeight: 'bold'}]}>
            Total
          </TextCmp>
        </View>
        <View style={styles.wrapper_cash}>
          <TextCmp style={styles.txt_cash}>${total}</TextCmp>
        </View>
      </View>
    );
  }
}
