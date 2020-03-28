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
  shouldComponentUpdate({
    discount: newDiscount,
    fixAmountDiscount: newFixAmountDiscount,
  }) {
    return (
      newDiscount !== this.props.discount ||
      newFixAmountDiscount !== this.props.fixAmountDiscount
    );
  }
  constructor(props) {
    super(props);
  }
  render() {
    const {
      discount,
      amountDiscount,
      onChangeDiscount,
      onChangeFixAmountDiscount,
      fixAmountDiscount,
    } = this.props;
    let amount = 0;
    if (amountDiscount) {
      amount = amountDiscount;
    }
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapper_type}>
          <TextCmp style={styles.text}>Discount </TextCmp>
        </View>
        <View style={[styles.center_view, {flexDirection: 'row'}]}>
          <View
            style={[styles.first_card, {borderWidth: 0, flexDirection: 'row'}]}>
            <View style={styles.box_discount}>
              <TextInput
                keyboardType="numeric"
                value={discount}
                onChangeText={onChangeDiscount}
                style={{padding: 0, fontSize: normalize(4), paddingLeft: 3}}
              />
            </View>
            <View style={styles.box_fixamount}>
              <TextCmp style={styles.txt_fixamount}>Fix Amount</TextCmp>
            </View>
          </View>
          <View
            style={[
              styles.second_card,
              {flexDirection: 'row', alignItems: 'center'},
            ]}>
            <TextCmp style={[styles.text]}>$</TextCmp>
            <TextInput
              value={fixAmountDiscount}
              onChangeText={onChangeFixAmountDiscount}
              style={{
                padding: 0,
                fontSize: normalize(4),
                paddingLeft: 3,
                width: '80%',
              }}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.wrapper_cash}>
          <TextCmp style={styles.txt_cash}>${amount}</TextCmp>
        </View>
      </View>
    );
  }
}
