import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
  StatusBar,
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
import {Logg, ToastLib} from '../../../utils';
import {storeCode} from '../../../values/AppValue';
import SettingModal from '../modal/setting/Setting';
import ModalSelectTechnician from '../modal/customer/select-technician/ModalSelectTechnician';
import ModalSelectServices from '../modal/customer/select-services/ModalSelectServices';
import RNPrint from 'react-native-print';
export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      discount: '',
      amountDiscount: '',
      fixAmountDiscount: '',
      cost1: 10,
      cost2: 20,
      cost3: 30,
      coupon: '',
      couponAmount: '',
      couponPrice: 0,
      giftCardText: '',
      giftCardBalance: '',
      giftCardAmount: '',
      isCreditCard: false,
      cusId: '',
      ticketId: '',
      isServiceNow: 0,
      customSplitAmount: 0,
      amountReceived: 0,
      totalRedeem: 0,
      appointmentId: '',
      isOpenSetting: false,
      openModalChangeTechnician: false,
      serviceIndex: '',
      openModalChangeService: false,
      customePrice: '',
    };
    this.defaultState = this.state;
  }

  toogleSetting = () => {
    this.setState({
      isOpenSetting: !this.state.isOpenSetting,
    });
  };

  onChangeCustomePrice = value => {
    this.setState({customePrice: value});
  };

  fastpayCount = () => {
    let {cost1} = this.state;
    cost1 = parseFloat(cost1);
    let cost2 = Math.ceil(cost1);
    let x = 1;
    let n = cost2.toString().length - 1;
    if (n == 2) x = 10;
    else if (n == 3) x = 100;

    let u = 10 * x;

    if (cost2 == cost1) {
      if (Math.floor(cost1 / u) < 5 * u) {
        let temp = cost1 % 10;
        if (temp == 0) {
          cost2 = cost1 + (10 - temp);
          this.setState({cost2});
        } else {
          if (temp < 5) {
            cost2 = cost1 + (5 - temp);
            this.setState({cost2});
          } else {
            cost2 = cost1 + (10 - temp);
            this.setState({cost2});
          }
        }
      } else {
        let temp = cost1 % u;
        if (temp == 0) {
          cost2 = cost1 + (10 * x - temp);
          this.setState({cost2});
        } else {
          if (temp < 5 * x) {
            cost2 = cost1 + (5 * x - temp);
            this.setState({cost2});
          } else {
            cost2 = cost1 + (10 * x - temp);
            this.setState({cost2});
          }
        }
      }
    } else {
      this.setState({cost2});
    }

    //Cost3
    let cost3 = cost2;
    let a = 20 * x;
    let a1 = 30 * x;
    let temp1 = cost2 % u;
    if (Math.floor(cost2 / u) < 5 * u) {
      if (temp1 == 0) {
        cost3 = cost2 + (10 * x - temp1);
        this.setState({cost3});
      } else {
        if (temp1 < 5 * x) {
          cost3 = cost2 + (5 * x - temp1);
          this.setState({cost3});
        } else {
          cost3 = cost2 + (10 * x - temp1);
          this.setState({cost3});
        }
      }
    } else {
      if (cost3 == 100 * x) {
        cost3 = 200 * x;
        this.setState({cost3});
      } else if (cost3 == 200 * x) {
        cost3 = 500 * x;
        this.setState({cost3});
      } else if (cost3 >= 80 * x) {
        cost3 = cost3 + (10 * x - temp1);
        this.setState({cost3});
      } else if (cost3 / a == 1) {
        cost3 = cost3 + 30 * x;
        this.setState({cost3});
      } else if (cost3 / a1 == 1) {
        cost3 = cost3 + 20 * x;
        this.setState({cost3});
      } else {
        cost3 = cost2 + (10 * x - temp1);
        this.setState({cost3});
      }
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.paymentBill !== this.props.paymentBill) {
      const {paymentBill} = this.props;
      let {discount} = this.state;
      let total = '';
      let {subTotal, tip} = paymentBill;
      if (discount) {
        if (tip) {
          total =
            parseFloat(subTotal) -
            // parseFloat(tip) -
            (parseFloat(subTotal) * parseFloat(discount)) / 100;
          if (!(total === parseInt(total))) {
            total = total.toFixed(2);
          }
          this.setState({total, cost1: total});
        } else {
          total =
            parseFloat(subTotal) -
            (parseFloat(subTotal) * parseFloat(discount)) / 100;
          if (!(total === parseInt(total))) {
            total = total.toFixed(2);
          }
          this.setState({total, cost1: total});
        }
      } else {
        if (tip) {
          total = parseFloat(subTotal);
          if (!(total === parseInt(total))) {
            total = total.toFixed(2);
          }
          this.setState({total, cost1: total});
        } else {
          total = parseFloat(subTotal);
          if (!(total === parseInt(total))) {
            total = total.toFixed(2);
          }
          this.setState({total, cost1: total});
        }
      }
    }
    if (prevState.discount !== this.state.discount) {
      let {fixAmountDiscount} = this.state;
      if (!fixAmountDiscount) {
        const {paymentBill} = this.props;
        let {discount} = this.state;
        let total = '';
        let {subTotal, tip} = paymentBill;
        if (tip) {
          total =
            parseFloat(subTotal) -
            (parseFloat(subTotal) * parseFloat(discount)) / 100;
          if (!(total === parseInt(total))) {
            total = total.toFixed(2);
          }
          if (!isNaN(total)) {
            this.setState({total, cost1: total});
          }
        } else {
          total =
            parseFloat(subTotal) -
            (parseFloat(subTotal) * parseFloat(discount)) / 100;
          if (!(total === parseInt(total))) {
            total = total.toFixed(2);
          }
          if (!isNaN(total)) {
            this.setState({total, cost1: total});
          }
        }
      }
    }
    if (prevState.giftCardAmount !== this.state.giftCardAmount) {
      const {paymentBill} = this.props;
      let {discount, giftCardAmount} = this.state;
      let total = '';
      let {subTotal, tip} = paymentBill;
      tip = tip ? parseFloat(tip) : 0;

      total =
        parseFloat(subTotal) -
        giftCardAmount -
        (parseFloat(subTotal) * parseFloat(discount)) / 100;
      if (!isNaN(total)) {
        this.setState({total, cost1: total});
      }
    }
    if (prevState.cost1 !== this.state.cost1) {
      if (this.state.cost1 === 0) {
        this.setState({cost1: 10}, () => this.fastpayCount());
      } else {
        this.fastpayCount();
      }
    }
    if (prevState.fixAmountDiscount !== this.state.fixAmountDiscount) {
      let {fixAmountDiscount, discount} = this.state;
      if (!discount) {
        const {paymentBill} = this.props;
        let {couponAmount, giftCardAmount} = this.state;
        let total = '';
        let {subTotal} = paymentBill;
        couponAmount = couponAmount ? parseFloat(couponAmount) : 0;
        fixAmountDiscount = fixAmountDiscount
          ? parseFloat(fixAmountDiscount)
          : 0;
        total =
          parseFloat(subTotal) -
          fixAmountDiscount -
          giftCardAmount -
          couponAmount;
        if (!isNaN(total)) {
          if (!(total === parseInt(total))) {
            total = total.toFixed(2);
          }
          this.setState({total, cost1: total});
        }
      }
    }
  }

  onChangeDiscount = value => {
    this.setState({discount: value + ''});
    if (!this.state.fixAmountDiscount) {
      let {paymentBill} = this.props;
      if (paymentBill.subTotal !== '') {
        let {total, amountDiscount} = this.state;
        this.setState({
          amountDiscount: (paymentBill.subTotal * parseFloat(value)) / 100,
        });
      }
    }
  };

  onChangeFixAmountDiscount = value => {
    this.setState({fixAmountDiscount: value, amountDiscount: value});
  };

  onChangeGiftCardText = value => {
    this.setState({
      giftCardText: value,
    });
  };

  onChangeGiftCardAmount = value => {
    const {giftCardBalance} = this.state;
    if (!giftCardBalance) {
      ToastLib.show('Please Insert Gift Card Text!');
    } else {
      if (parseFloat(value) > parseFloat(giftCardBalance)) {
        this.setState({giftCardAmount: giftCardBalance});
      } else {
        this.setState({
          giftCardAmount: value,
        });
      }
    }
  };

  checkingCoupon = () => {
    const {giftCardText} = this.state;
    this.props.giftCardCheckExist(giftCardText).then(result => {
      if (result[0].Status === 'Success') {
        this.setState({
          giftCardAmount: result[4].Balance,
          giftCardBalance: result[4].Balance,
        });
      } else {
        ToastLib.show('Gift Card Does Not Exist!');
        this.setState({giftCardText: ''});
      }
    });
  };

  onSubmit = (cost, now) => {
    const {listServicePayment, selectedCustomer} = this.props;
    let {
      total,
      discount,
      fixAmountDiscount,
      isCreditCard,
      cusId,
      ticketId,
      customSplitAmount,
      amountReceived,
      coupon,
      couponAmount,
      giftCardText,
      giftCardAmount,
      totalRedeem,
      appointmentId,
    } = this.state;
    if (listServicePayment.length === 0) {
      ToastLib.show('Please check nails technician, services');
    } else {
      let spId = '';
      let spPrice = '';
      let spUnitPrice = '';
      let spDiscount = '';
      let spTax = '';
      let spQuantity = '';
      let spStaff = '';
      let spTip = '';
      let spTicket = '';
      listServicePayment.map(e => {
        spId += e.serviceId + '_';
        spPrice += e.amount * e.quantity + '_';
        spUnitPrice += e.amount * e.quantity + '_';
        spDiscount += '0' + '_';
        spTax += '0' + '_';
        spQuantity += e.quantity + '_';
        spStaff += e.idTechnician + '_';
        spTip += e.tip + '_';
        spTicket += '0' + '_';
      });
      spId = spId.substring(0, spId.length - 1);
      spPrice = spPrice.substring(0, spPrice.length - 1);
      spUnitPrice = spUnitPrice.substring(0, spUnitPrice.length - 1);
      spDiscount = spDiscount.substring(0, spDiscount.length - 1);
      spTax = spTax.substring(0, spTax.length - 1);
      spQuantity = spQuantity.substring(0, spQuantity.length - 1);
      spStaff = spStaff.substring(0, spStaff.length - 1);
      spTip = spTip.substring(0, spTip.length - 1);
      spTicket = spTicket.substring(0, spTicket.length - 1);
      let params = {
        appointmentId,
        total_paying: cost ? cost : 0,
        order_discount: discount !== 0 ? discount.toString() : '0',
        order_discount_fix: fixAmountDiscount !== '' ? fixAmountDiscount : '0',
        paid_by: isCreditCard ? 'CC' : 'Cash',
        isServiceNow: now,
        custom_split_amount: customSplitAmount,
        amount_received: amountReceived,
        couponCode: coupon,
        coupon_discountPrice: couponAmount,
        gift_card_no: giftCardText,
        giftcard_value: giftCardAmount,
        total_redeem: totalRedeem,
        cusId: selectedCustomer
          ? selectedCustomer.id
            ? selectedCustomer.id
            : selectedCustomer.cusId
            ? selectedCustomer.cusId
            : ''
          : cusId,
        ticketId:
          selectedCustomer && selectedCustomer.ticketId
            ? selectedCustomer.ticketId
            : ticketId,
        spId,
        spPrice,
        spUnitPrice,
        spDiscount,
        spTax,
        spQuantity,
        spStaff,
        spTip,
        spTicket,
        storeCode: storeCode,
      };
      this.props.onSubmitPayment(params).then(res => {
        if (res) {
          let status = res[0].Status;
          let message = res[1].ErrorMessege;
          let file = res[3].Files;
          if (status === 'Success') {
            if (file !== '') {
              let ConstantshostName = '95.217.32.253';
              let url =
                'http://' +
                ConstantshostName +
                '/POSSystem/Temps/' +
                storeCode +
                '/' +
                res[3].Files;
              RNPrint.print({filePath: url});
              alert();
            }

            ToastLib.show(message);
            this.setState({...this.defaultState});
            this.props.onResetPayment();
          } else {
            ToastLib.show(message);
          }
        }
      });
    }
  };

  changeTechnician = data => {
    const {serviceIndex} = this.state;
    if (data) {
      let params = {...data, serviceIndex};
      this.props.editTechnician(params);
    }
  };

  openModalChangeTechnician = index => {
    const {openModalChangeTechnician} = this.state;
    this.setState({
      openModalChangeTechnician: !openModalChangeTechnician,
      serviceIndex: index,
    });
  };

  editServices = data => {
    const {serviceIndex} = this.state;
    if (data) {
      let params = {...data, serviceIndex};
      this.props.editService(params);
    }
  };

  openModalChangeService = index => {
    const {openModalChangeService} = this.state;

    this.setState({
      openModalChangeService: !openModalChangeService,
      serviceIndex: index,
    });
  };

  render() {
    const {
      selectedService,
      unSelectedCustomer,
      selectedCustomer,
      unSelectedService,
      deleteSelectedService,
      updateTipsPayment,
      onSubmitPayment,
      typeServices,
      listServicesItem,
      editServices,
      listServices,
      listSelectedServices,
    } = this.props;
    const {
      cost1,
      cost2,
      cost3,
      giftCardAmount,
      giftCardText,
      openModalChangeTechnician,
      openModalChangeService,
    } = this.state;
    return (
      <View style={[styles.container]}>
        <View style={styles.wrapper_title}>
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
          <TouchableOpacity onPress={() => this.toogleSetting()}>
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
            <ListServices
              openModalChangeTechnician={this.openModalChangeTechnician}
              deleteSelectedService={deleteSelectedService}
              openModalChangeService={this.openModalChangeService}
            />
          </View>
        </View>
        <View style={styles.wrapper_bill}>
          <View style={styles.wrapper_total}>
            <PaymentSubtotal subTotal={this.props.paymentBill.subTotal} />
            <PaymentCoupon />
            <PaymentGiftCart
              giftCardAmount={giftCardAmount}
              giftCardText={giftCardText}
              onEndEditing={this.checkingCoupon}
              onChangeGiftCardText={this.onChangeGiftCardText}
              onChangeGiftCardAmount={this.onChangeGiftCardAmount}
            />
            <PaymentTips
              tip={this.props.paymentBill.tip}
              updateTipsPayment={updateTipsPayment}
            />
            <PaymentDiscount
              discount={this.state.discount}
              amountDiscount={this.state.amountDiscount}
              onChangeDiscount={this.onChangeDiscount}
              fixAmountDiscount={this.state.fixAmountDiscount}
              onChangeFixAmountDiscount={this.onChangeFixAmountDiscount}
            />
            <PaymentReward />
            <PaymentTotal total={this.state.total} />
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
              <PaymentListButton
                onChangeCustomePrice={this.onChangeCustomePrice}
                customePrice={this.state.customePrice}
                cost1={cost1}
                cost2={cost2}
                cost3={cost3}
                onSubmitPayment={this.onSubmit}
                cancelService={this.props.cancelService}
              />
            </View>
          </View>
        </View>
        {this.state.isOpenSetting && (
          <SettingModal
            isShow={this.state.isOpenSetting}
            onClose={this.toogleSetting}
          />
        )}

        {openModalChangeTechnician && (
          <ModalSelectTechnician
            visible={openModalChangeTechnician}
            onClose={this.openModalChangeTechnician}
            listTechnicians={this.props.listTechnicians}
            changeTechnician={this.changeTechnician}
          />
        )}
        {openModalChangeService && (
          <ModalSelectServices
            visible={openModalChangeService}
            onClose={this.openModalChangeService}
            typeServices={typeServices}
            listServicesItem={listServicesItem}
            editServices={this.editServices}
            listServices={listServices}
            listSelectedServices={listSelectedServices}
          />
        )}
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
    height: '59%',
    paddingHorizontal: 5,
  },
  wrapper_drapzone: {
    height: '34%',
  },
  wrapper_title: {
    height: '7%',
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
