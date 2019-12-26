import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

import themes from '../../../../config/themes';
import {normalize} from '../../../../themes/FontSize';
import TextCmp from '../../../../themes/TextCmp';
import ItemCustomer from '../../../../Components/InitScreen/itemCustomer';
export default class PaymentCoupon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.fx1PL2}>
        <View style={styles.containerTxt}>
          <TextCmp style={styles.txtLabel}>Customer</TextCmp>
        </View>
        <ScrollView style={styles.fx1}>
          {[1, 2].map((item, index) => {
            return <ItemCustomer key={index}></ItemCustomer>;
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fx1PL2: {flex: 1, paddingLeft: 2, zIndex: -1},
  containerTxt: {
    height: themes.height / 20,
    width: '100%',
    padding: 3,
    justifyContent: 'center',
  },
  txtLabel: {
    alignItems: 'center',
    color: '#383E44',
    fontSize: normalize(5),
  },
  fx1: {flex: 1},
});
