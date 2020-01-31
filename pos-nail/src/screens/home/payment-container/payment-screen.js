import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import themes from '../../../config/themes';
import {normalize} from '../../../themes/FontSize';

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
import {TextCmp} from '../../../themes';
export default class PaymentScreen extends Component {
  shouldComponentUpdate({dataService: newDataService}) {
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
    const {update} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.wrapper_title}>
          <TextCmp
            style={{
              alignItems: 'center',
              color: '#383E44',
              fontWeight: 'bold',
              fontSize: normalize(5),
            }}>
            Payment Cart
          </TextCmp>
        </View>
        <View style={{flex: 4}}>
          <TextCmp style={{marginLeft: 5}}>
            Drag Nail Tech, Service, Ticket item here
          </TextCmp>
          <View
            style={{backgroundColor: '#F0FFFF', width: '100%', height: '45%'}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 3,
            }}>
            <TextCmp style={{marginLeft: 5}}>Service</TextCmp>
            <TextCmp style={{marginLeft: 5}}>Nails Tech</TextCmp>
            <TextCmp style={{marginLeft: 5}}>Qty</TextCmp>
            <TextCmp style={{marginLeft: 5}}>Amount</TextCmp>
            <TextCmp style={{marginLeft: 5}}>Tip</TextCmp>
          </View>
          <View
            style={{backgroundColor: '#F0F0F0', width: '100%', height: '45%'}}
          />
        </View>
        <View style={styles.containerfx6}>
          {/* <ScrollView style={styles.fx1}>
              {this.props.dataService.map((item, index) => {
                return (
                  <ItemService
                    key={index}
                    id={item.id}
                    name={item.name}></ItemService>
                );
              })}
            </ScrollView> */}

          <PaymentSubtotal />
          <PaymentCoupon />
          <PaymentGiftCart />
          <PaymentTips />
          <PaymentDiscount />
          <PaymentReward />
          <PaymentTotal />
          <View style={styles.fx1FlexStart}>
            <TextCmp style={{color: '#383E44', fontSize: normalize(4)}}>
              Fast Pay With Cash
            </TextCmp>
          </View>
          <PaymentListButton />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#CECECE',
    paddingHorizontal: 5,
  },
  containerfx6: {
    flex: 5.5,
    justifyContent: 'flex-start',
    marginTop: 30,
  },
  // fx4: {flex: 4},
  fx1: {flex: 1, padding: 5},
  fx1FlexStart: {alignItems: 'flex-start'},
  wrapper_title: {
    flex: 0.5,
    paddingLeft: 7,
    justifyContent: 'center',
  },
});
