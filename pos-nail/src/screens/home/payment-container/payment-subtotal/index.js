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

export default class PaymentSubtotal extends Component {
  shouldComponentUpdate({subTotal: newSubTotal}) {
    return newSubTotal !== this.props.subTotal;
  }
  constructor(props) {
    super(props);
  }
  render() {
    const {subTotal} = this.props;
    let total = 0;
    if (!isNaN(subTotal)) {
      total = subTotal;
    }
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapper_type}>
          <TextCmp style={styles.text}>Subtotal</TextCmp>
        </View>
        <View style={styles.wrapper_cash}>
          <TextCmp style={styles.txt_cash}>$ {total}</TextCmp>
        </View>
      </View>
    );
  }
}
