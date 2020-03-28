import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {Colors} from '../../../../../themes';
import Phone from './Phone';
import Name from './Name';
import SelectAppoiment from './SelectAppoiment';
import TimeAppoiment from './TimeAppoiment';
import SelectTechnician from './SelectNewTechnician/SelectTechnician';
import SelectServices from './SelectServices';
import BottomBtn from './bottom-btn/BottomBtn';
import {Logg, ToastLib} from '../../../../../utils';
export default class CustomerSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      firstName: '',
      lastName: '',
      haveAppoiment: 0,
      paramSignIn: null,
    };
  }

  onChangeText = (key, value) => {
    if (key === 'phone') {
      if (isNaN(value)) {
        alert('Please enter number only!');
      } else {
        this.setState({[key]: value});
      }
    } else {
      this.setState({[key]: value});
    }
  };

  onSelect = value => {
    this.setState({haveAppoiment: value});
  };

  onSignIn = () => {
    const {phone, haveAppoiment} = this.state;
    const {listServicesSelected, listTechnicianSelected} = this.props;
    let params = {
      phone,
      storeCode: 'MAX12898',
      haveAppt: haveAppoiment,
    };

    let servicesId = '';
    listServicesSelected.map(item => {
      servicesId += item.id + '_';
    });
    let staffsId = '';
    listTechnicianSelected.map(item => {
      staffsId += item.id + '_';
    });
    params.staffId = staffsId.slice(0, staffsId.length - 1);
    params.serviceId = servicesId.slice(0, servicesId.length - 1);
    Logg.info('__param___', params);
    this.props.signIn(params);
    this.props.onClose(false);
  };

  onEndEditing = () => {
    const {phone} = this.state;
    this.props
      .checkCustomerExist({
        phone,
        storeCode: 'MAX12898',
      })
      .then(res => {
        Logg.info('res', res);
        if (res) {
          let isExist = res.dataArray[0];
          let firstName = res.dataArray[3].FirstName;
          let lastName = res.dataArray[4].LastName;
          if (isExist.Status === 'Success') {
            this.setState({
              firstName,
              lastName,
            });
          } else {
            ToastLib.show('Customer does not exist !');
          }
        }
      });
  };

  render() {
    const {phone, firstName, lastName, haveAppoiment} = this.state;
    const {onClose} = this.props;
    return (
      <View style={styles.container}>
        <Phone
          value={phone}
          onChangeText={this.onChangeText}
          onEndEditing={this.onEndEditing}
        />
        <Name
          firstName={firstName}
          lastName={lastName}
          onChangeText={this.onChangeText}
        />
        <SelectAppoiment onSelect={this.onSelect} />
        {haveAppoiment === '1' ? (
          <View style={{flex: 2}}>
            <TimeAppoiment />
            <View style={{flex: 1}} />
          </View>
        ) : (
          <View style={{flex: 2}}>
            <SelectServices />
            <SelectTechnician />
          </View>
        )}
        <BottomBtn onClose={onClose} signIn={this.onSignIn} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundModal,
    width: '100%',
    height: '100%',
    paddingBottom: 10,
  },
});
