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
import {TextCmp, Colors} from '../../../themes';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {homeIcon} from '../../../assets';
import ListServices from './list-service';

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // _dataService: dataService,
    };
  }

  render() {
    const {update, setDropZoneNailTech} = this.props;

    return (
      <View style={styles.container}>
        <View
          style={styles.wrapper_title}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
          }}>
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
          style={{flex: 4.2}}
          onLayout={event => {
            this.props.setDropZoneNailTech(event);
          }}>
          <TextCmp style={{marginLeft: 5, fontWeight: 'bold'}}>
            Drag Nail Tech, Service, Ticket item here
          </TextCmp>
          <View style={{width: '100%', height: '45%'}}>
            {this.props.listTechnicianSelected.map((item, index) => {
              return (
                <View style={styles.wrappername} key={index}>
                  <TextCmp>Nail Tech: {item.name}</TextCmp>
                  <TouchableOpacity
                    style={styles.btn_remove}
                    onPress={() => this.props.unselectedTechnician(item)}>
                    <Image
                      source={homeIcon.delete}
                      style={{width: 15, height: 15}}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 3,
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
        <View style={styles.containerfx6}>
          <PaymentSubtotal subTotal={this.props.paymentBill.subTotal} />
          <PaymentCoupon />
          <PaymentGiftCart />
          <PaymentTips />
          <PaymentDiscount />
          <PaymentReward />
          <PaymentTotal />
          <View style={styles.fx1FlexStart}>
            <TextCmp
              style={{
                color: '#383E44',
                fontSize: normalize(4),
                fontWeight: 'bold',
              }}>
              Fast Pay With Cash
            </TextCmp>
          </View>
          <PaymentListButton />
        </View>
        {/* <View style={{ height: 100, width: 100, backgroundColor: 'yellow' }}></View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#CECECE',
    // paddingHorizontal: 5,
    // backgroundColor: 'red',
  },
  containerfx6: {
    flex: 5.5,
    justifyContent: 'flex-end',
    marginTop: 30,
    paddingHorizontal: 5,
  },
  // fx4: {flex: 4},
  fx1: {flex: 1, padding: 5},
  fx1FlexStart: {alignItems: 'flex-start'},
  wrapper_title: {
    flex: 0.5,
    // paddingLeft: 7,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: Colors.bgGray,
    paddingHorizontal: 5,
    borderRightColor: 'gray',
    borderRightWidth: 1,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
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
});
