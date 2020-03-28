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

import {styles_home} from '../../styles';
import {TextCmp} from '../../../../themes';
import {styles} from '../styles';

export default class PaymentReward extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapper_type}>
          <TextCmp style={styles.text}>Reward</TextCmp>
        </View>
        <View style={[styles.center_view, {flexDirection: 'row'}]}>
          <View style={[styles.first_card, {width: '44%'}]}>
            <TextInput style={{padding: 0}} />
          </View>
          <View
            style={[
              styles.second_card,
              {width: '52%', justifyContent: 'center', alignItems: 'center'},
            ]}>
            <TextCmp>Reedem</TextCmp>
          </View>
        </View>
        <View style={styles.wrapper_cash}>
          <TextCmp style={styles.txt_cash}>$0</TextCmp>
        </View>
      </View>
    );
  }
}
