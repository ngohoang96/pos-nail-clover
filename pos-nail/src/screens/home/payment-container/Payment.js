import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
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
import {TextCmp, Colors, Metrics} from '../../../themes';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {homeIcon} from '../../../assets';
import ListServices from './list-service';
import CustomerCard from './customer-card/CustomerCard';
import NailTechCard from './nail-tech-card';
import ServiceCard from './service-card/ServiceCard';

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // _dataService: dataService,
    };
  }

  render() {
    const {
      selectedService,
      unSelectedCustomer,
      selectedCustomer,
      unSelectedService,
    } = this.props;

    return (
      <View style={styles.container}>
        <View
          style={styles.wrapper_title}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
          }}>
          <View style={{width: '8%'}} />
          <TextCmp
            style={{
              alignItems: 'center',
              color: '#383E44',
              fontWeight: 'bold',
              fontSize: normalize(5),
            }}>
            Payment Cart
          </TextCmp>
          <TouchableOpacity>
            <IonIcon
              name="ios-menu"
              size={normalize(6)}
              // color="gray"
            />
          </TouchableOpacity>
        </View>
        <View
          style={styles.wrapper_drapzone}
          onLayout={event => {
            this.props.setDropZoneNailTech(event);
          }}>
          <TextCmp style={{marginLeft: 5, fontWeight: 'bold'}}>
            Drag Nail Tech, Service, Ticket item here
          </TextCmp>
          <ScrollView style={{width: '100%', height: '45%'}}>
            {this.props.listTechnicianSelected.map((item, index) => {
              return (
                <NailTechCard
                  item={item}
                  key={index}
                  unselectedTechnician={this.props.unselectedTechnician}
                />
              );
            })}
            {selectedCustomer !== null && (
              <CustomerCard
                selectedCustomer={selectedCustomer}
                unSelectedCustomer={unSelectedCustomer}
              />
            )}
            {selectedService !== null && (
              <ServiceCard
                selectedService={selectedService}
                unSelectedService={unSelectedService}
              />
            )}
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TextCmp style={{marginLeft: 5, fontWeight: 'bold'}}>
              Service
            </TextCmp>
            <TextCmp style={{marginLeft: 5, fontWeight: 'bold'}}>
              Nails Tech
            </TextCmp>
            <TextCmp style={{marginLeft: 5, fontWeight: 'bold'}}>Qty</TextCmp>
            <TextCmp style={{marginLeft: 5, fontWeight: 'bold'}}>
              Amount
            </TextCmp>
            <TextCmp
              style={{marginLeft: 5, marginRight: 5, fontWeight: 'bold'}}>
              Tip
            </TextCmp>
          </View>
          <View style={{width: '100%', height: '45%'}}>
            <ListServices />
          </View>
        </View>
        <View style={styles.wrapper_bill}>
          <View style={styles.wrapper_total}>
            <PaymentSubtotal subTotal={this.props.paymentBill.subTotal} />
            <PaymentCoupon />
            <PaymentGiftCart />
            <PaymentTips tip={this.props.paymentBill.tip} />
            <PaymentDiscount />
            <PaymentReward />
            <PaymentTotal />
          </View>
          <View style={styles.wrapper_fastpay}>
            <TextCmp
              style={{
                color: '#383E44',
                fontSize: normalize(4),
                fontWeight: 'bold',
                height: '10%',
              }}>
              Fast Pay With Cash
            </TextCmp>
            <View style={styles.wrapper_servicebutton}>
              <PaymentListButton />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: '#CECECE',
  },
  fx1: {flex: 1, padding: 5},
  wrapper_fastpay: {
    height: '48%',
  },
  wrapper_bill: {
    height: '54%',
    paddingHorizontal: 5,
  },
  wrapper_drapzone: {
    height: '40%',
  },
  wrapper_title: {
    height: '6%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: Colors.bgGray,
    paddingHorizontal: 5,
    borderRightColor: 'gray',
    borderRightWidth: 0.5,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginBottom: 1,
    alignItems: 'center',
  },
  wrappername: {
    backgroundColor: '#EEE7AD',
    width: '98%',
    height: 30,
    padding: 3,
    margin: 3,
    justifyContent: 'center',
  },
  btn_remove: {
    position: 'absolute',
    top: 0,
    left: '70%',
    right: 0,
    bottom: 0,
    alignItems: 'center',
    height: '100%',
    width: 30,
    justifyContent: 'center',
  },
  wrapper_servicebutton: {
    height: '90%',
  },
  wrapper_total: {
    height: '52%',
    justifyContent: 'space-around',
  },
});
