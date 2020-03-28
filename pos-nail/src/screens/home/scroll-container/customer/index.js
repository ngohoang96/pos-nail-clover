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

import ItemCustomer from '../../../../Components/InitScreen/CustomerItem';
import {TextCmp, Colors} from '../../../../themes';
import {selectors, actions} from '../../../../stores';
import {connect} from 'react-redux';
import CustomerItem from '../../../../Components/InitScreen/CustomerItem';
import CustomerDetail from '../../modal/customer-detail/CustomerDetail';
import {
  AppCheckIn_ApptInfo,
  AppCheckIn_TicketInfo,
  AppCheckIn_StaffDone,
  AppCheckIn_StaffCancel,
} from '../../actions';
import {storeCode} from '../../../../values/AppValue';
import {Logg, ToastLib} from '../../../../utils';

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
      customerDetail: null,
    };
  }

  toogleModal = (value, detail) => {
    this.setState({
      isShowModal: value,
      customerDetail: detail,
    });
  };

  updateSelectedCustomer = item => {
    this.props.updateSelectedCustomer(item);
  };

  toogleCancelInserviceCus = () => {
    this.setState({isShowModal: false, customerDetail: null});
    this.props.cancelCusInservice(this.state.customerDetail).then(res => {
      if (!res) {
        ToastLib.show('Cancel Fail!');
      }
      if (res && Array.isArray(res)) {
        if (res[1]) {
          ToastLib.show(res[1].ErrorMessege);
        }
      }
    });
  };

  render() {
    const {
      listCutomersWaiting,
      listCutomersInservice,
      listCutomersPayment,
    } = this.props;
    const {isShowModal, customerDetail} = this.state;
    return (
      <View style={styles.fx1PL2}>
        <View style={styles.containerTxt}>
          <TextCmp style={styles.txtLabel}>Customer</TextCmp>
        </View>
        <ScrollView style={styles.fx1}>
          {listCutomersWaiting.map((item, index) => {
            return (
              <CustomerItem
                key={index}
                index={index}
                item={item}
                updateSelectedCustomer={() => this.updateSelectedCustomer(item)}
                toogleModal={() => this.toogleModal(true, item)}
              />
            );
          })}
          {listCutomersInservice.map((item, index) => {
            return (
              <CustomerItem
                key={index}
                index={index}
                item={item}
                updateSelectedCustomer={() => this.updateSelectedCustomer(item)}
                toogleModal={() => this.toogleModal(true, item)}
              />
            );
          })}
          {listCutomersPayment.map((item, index) => {
            return (
              <CustomerItem
                key={index}
                index={index}
                item={item}
                updateSelectedCustomer={() => this.updateSelectedCustomer(item)}
                toogleModal={() => this.toogleModal(true, item)}
              />
            );
          })}
        </ScrollView>
        {isShowModal && customerDetail && (
          <CustomerDetail
            isShowModal={isShowModal}
            customerDetail={customerDetail}
            toogleModal={this.toogleModal}
            cancelCusInservice={this.toogleCancelInserviceCus}
            handleCusInservice={this.props.handleCusInservice}
          />
        )}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  const updateSelectedCustomer = data => {
    let {status, ticketId, staffId, serviceId, appoinmentId} = data;
    let params = {
      storeCode: storeCode,
    };
    if (status === 'waiting') {
      params.ticketId = appoinmentId;
      dispatch(AppCheckIn_ApptInfo(params)).then(res => {
        let tempArray = [];
        if (Array.isArray(res)) {
          res.map((e, index) => {
            let {staffId, staffName, name, quantity, price, tip, id} = e;
            let object = {
              name: staffName,
              idTechnician: staffId,
              serviceId: id,
              id: new Date().getTime() + index,
              service: name,
              quantity: quantity.toString(),
              amount: price.toString(),
              tip: tip.toString(),
              total: (quantity * price - tip).toString(),
            };
            tempArray.unshift(object);
          });
          dispatch(actions.home.updateServiceFromCustomer(tempArray));
        }
      });
      dispatch(actions.home.updateSelectedCustomer(data));
    } else if (status === 'pending' && ticketId) {
      params.ticketId = ticketId;
      dispatch(AppCheckIn_TicketInfo(params)).then(res => {
        let tempArray = [];
        if (Array.isArray(res)) {
          res.map((e, index) => {
            let {staffId, staffName, name, quantity, price, tip} = e;
            let object = {
              name: staffName,
              idTechnician: staffId,
              serviceId: e.id.toString(),
              id: new Date().getTime() + index,
              service: name,
              quantity: quantity.toString(),
              amount: price.toString(),
              tip: tip.toString(),
              total: (quantity * price - tip).toString(),
            };
            tempArray.unshift(object);
          });
          dispatch(actions.home.updateServiceFromCustomer(tempArray));
        }
      });
      dispatch(actions.home.updateSelectedCustomer(data));
    } else if (status === 'pending' && !ticketId) {
      ToastLib.show('Can not select this customer on this time!');
    } else if (status === 'inservice') {
    }
  };

  const cancelCusInservice = info => {
    if (info) {
      const {ticketId, staffId, serviceId} = info;
      const params = {
        ticketId,
        staffId,
        serviceId,
        storeCode: storeCode,
      };
      return dispatch(AppCheckIn_StaffCancel(params)).then(res => {
        return res;
      });
    }
  };

  const handleCusInservice = data => {
    let {ticketId} = data;
    let params = {
      storeCode: storeCode,
    };
    params.ticketId = ticketId;
    params.staffId = data.staffId;
    params.serviceId = data.serviceId;
    dispatch(AppCheckIn_StaffDone(params)).then(res => {
      Logg.info('res custome in_service', res);
    });
  };
  return {
    updateSelectedCustomer,
    cancelCusInservice,
    handleCusInservice,
  };
};
const mapStateToProps = state => ({
  listCutomersWaiting: state.home.customerWaiting,
  listCutomersInservice: state.home.customerInservice,
  listCutomersPayment: state.home.customerPayment,
});
export default connect(mapStateToProps, mapDispatchToProps)(Customer);
const styles = StyleSheet.create({
  fx1PL2: {flex: 1, zIndex: 3},
  containerTxt: {
    height: '7%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bgGray,
    borderRightWidth: 0.5,
    borderRightColor: 'gray',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  txtLabel: {
    alignItems: 'center',
    color: 'black',
    fontSize: normalize(5),
  },
  fx1: {flex: 1, marginHorizontal: 5},
});
