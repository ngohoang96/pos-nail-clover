import React, {Component} from 'react';
import {View, TextInput} from 'react-native';

import themes from '../../../../config/themes';
import {normalize} from '../../../../themes/FontSize';
import {TextCmp, Colors} from '../../../../themes';
import {styles} from '../styles';

export default class PaymentGiftCart extends Component {
  shouldComponentUpdate({giftCardText: newText, giftCardAmount: newAmount}) {
    return (
      newText !== this.props.giftCardText ||
      newAmount !== this.props.giftCardAmount
    );
  }
  constructor(props) {
    super(props);
  }
  render() {
    const {
      giftCardAmount,
      giftCardText,
      onEndEditing,
      onChangeGiftCardText,
      onChangeGiftCardAmount,
    } = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapper_type}>
          <TextCmp style={styles.text}>Gift Card</TextCmp>
        </View>
        <View style={[styles.center_view, {flexDirection: 'row'}]}>
          <TextInput
            style={[
              styles.first_card,
              {padding: 0, paddingLeft: 3, fontSize: normalize(4)},
            ]}
            value={giftCardText}
            onChangeText={onChangeGiftCardText}
            onEndEditing={onEndEditing}
            keyboardType="numeric"
          />
          <View
            style={[
              styles.second_card,
              {flexDirection: 'row', alignItems: 'center'},
            ]}>
            <TextCmp style={[styles.txt_cash]}>$</TextCmp>
            <TextInput
              style={{
                padding: 0,
                paddingLeft: 3,
                fontSize: normalize(4),
                width: '80%',
                alignSelf: 'flex-start',
                height: '100%',
                backgroundColor: Colors.bgGray,
                justifyContent: 'center',
              }}
              value={giftCardAmount}
              onChangeText={onChangeGiftCardAmount}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.wrapper_cash}>
          <TextCmp style={styles.txt_cash}>${giftCardAmount}</TextCmp>
        </View>
      </View>
    );
  }
}
