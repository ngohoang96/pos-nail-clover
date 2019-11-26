import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet,ScrollView} from 'react-native';
import {styles_home} from '../styles-home';
import themes from '../../../config/themes';
import ItemService from './payment-service/item-service';
import {dataService} from '../../../Components/InitScreen/mockData';
import ScaleTextLibrary from '../../../utils/ScaleTextLibrary';
import PaymentCoupon from './payment-coupon/index';
import PaymentGiftCart from './payment-giftcart/index';
import PaymentTips from './payment-tips/index';
import PaymentDiscount from './payment-discount/index';
import PaymentReward from './payment-reward/index';
import PaymentTotal from './payment-total/index';
import PaymentSubtotal from './payment-subtotal/index';
import PaymentListButton from './payment-listbutton/index';
import PaymentTitle from './payment-title/index';
export default class PaymentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <PaymentTitle></PaymentTitle>
        <View style={styles.containerfx6}>
          <View style={styles.fx4}>
            <ScrollView style={styles.fx1}>
              {this.state.dataService.map(item => {
                return <ItemService name={item.name}></ItemService>;
              })}
            </ScrollView>
            <View style={styles.fx1}>
              <PaymentSubtotal></PaymentSubtotal>
              <PaymentCoupon></PaymentCoupon>
              <PaymentGiftCart></PaymentGiftCart>
              <PaymentTips></PaymentTips>
              <PaymentDiscount></PaymentDiscount>
              <PaymentReward></PaymentReward>
              <PaymentTotal></PaymentTotal>
              <View style={styles.fx1FlexStart}>
                <ScaleTextLibrary
                  styl={{color: '#383E44'}}
                  font={themes.H5}
                  text="Fast With Cash"></ScaleTextLibrary>
              </View>
              <PaymentListButton></PaymentListButton>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    borderRightWidth: 1,
    borderRightColor: '#878787',
  },
  containerfx6: {
    flex: 6,
    backgroundColor: 'white',
    paddingHorizontal: 3,
    paddingVertical: 1,
  },
  fx4: {flex: 4},
  fx1: {flex: 1},
  fx1FlexStart: {alignItems: 'flex-start', flex: 1},
});
