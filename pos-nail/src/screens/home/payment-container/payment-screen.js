import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import themes from '../../../config/themes';
import { normalize } from '../../../themes/FontSize';

import ItemService from './payment-service/item-service';
// import {dataService} from '../../../Components/InitScreen/mockData';
import PaymentCoupon from './payment-coupon/index';
import PaymentGiftCart from './payment-giftcart/index';
import PaymentTips from './payment-tips/index';
import PaymentDiscount from './payment-discount/index';
import PaymentReward from './payment-reward/index';
import PaymentTotal from './payment-total/index';
import PaymentSubtotal from './payment-subtotal/index';
import PaymentListButton from './payment-listbutton/index';
import PaymentTitle from './payment-title/index';
import { TextCmp } from '../../../themes';
export default class PaymentScreen extends Component {
  shouldComponentUpdate({ dataService: newDataService }) {
    if (newDataService !== this.props.dataService) return true;
  }
  constructor(props) {
    super(props);
    this.state = {
      // _dataService: dataService,
    };
  }
  componentDidMount() {
    // console.log('get data service ---- ' + this.props.dataService);
    // this.props.updateDataService
    // this.props.getHistory();
  }
  render() {
    const { update } = this.props;

    return (
      <View style={styles.container}>
        <PaymentTitle></PaymentTitle>

        <View style={styles.containerfx6}>
          <View style={styles.fx4}>
            <ScrollView style={styles.fx1}>
              {this.props.dataService.map((item, index) => {
                return (
                  <ItemService
                    key={index}
                    id={item.id}
                    name={item.name}></ItemService>
                );
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
                <TextCmp style={{ color: '#383E44', fontSize: normalize(5) }}>
                  Fast With Cash
                </TextCmp>
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
    // flex: 0.8,
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#878787',
  },
  containerfx6: {
    flex: 6,
    backgroundColor: 'white',
    paddingHorizontal: 3,
    paddingVertical: 1,
  },
  fx4: { flex: 4 },
  fx1: { flex: 1 },
  fx1FlexStart: { alignItems: 'flex-start', flex: 1 },
});
