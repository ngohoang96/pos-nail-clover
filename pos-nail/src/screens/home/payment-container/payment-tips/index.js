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
import InputTips from './InputTips';

export default class PaymentTips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onChangeValue = value => {
    this.setState({
      value: value + '',
    });
  };
  onEndEditing = value => {
    this.props.updateTipsPayment(value.nativeEvent.text);
  };
  render() {
    const {tip, updateTipsPayment} = this.props;
    const {value} = this.state;
    let tips = 0;
    if (!isNaN(tip)) {
      tips = tip;
    }
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapper_type}>
          <TextCmp style={styles.text}>Tips</TextCmp>
        </View>
        <View style={styles.center_view}>
          <InputTips
            value={value}
            onChangeValue={this.onChangeValue}
            onEndEditing={this.onEndEditing}
          />
        </View>
        <View style={styles.wrapper_cash}>
          <TextCmp style={styles.txt_cash}>$ {tips}</TextCmp>
        </View>
      </View>
    );
  }
}
