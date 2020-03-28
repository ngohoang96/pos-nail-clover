import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Alert} from 'react-native';
import Line1 from './Line1/LineOne';
import Line2 from './Line2/Line2';
import Line3 from './Line3/Line3';
import Line4 from './Line4/Line4';
import Line5 from './Line5/Line5';
import {Colors} from '../../../../../themes';
import BottomBtn from './bottom-btn/BottomBtn';

export default class CustomerRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valuePhone: '',
      valueRefferal: '',
      valueFirstName: '',
      valueLastName: '',
      valueMailAddress: '',
      valueAddress: '',
      valueState: '',
      valueCity: '',
      valueZipCode: '',
      valueSelectDay: '',
      valueSelectMonth: '',
    };
  }
  onChangeText = (e, i) => {
    switch (i) {
      case 1:
        let newText = '';
        let numbers = '0123456789';

        for (var i = 0; i < e.length; i++) {
          if (numbers.indexOf(e[i]) > -1) {
            newText = newText + e[i];
          } else {
            // your call back function
            alert('please enter numbers only');
          }
        }
        this.setState({
          valuePhone: newText,
        });
        break;
      case 2:
        this.setState({
          valueRefferal: e,
        });
        break;
      case 3:
        this.setState({
          valueFirstName: e,
        });
        break;
      case 4:
        this.setState({
          valueLastName: e,
        });
        break;
      case 5:
        this.setState({
          valueMailAddress: e,
        });
        break;
      case 6:
        this.setState({
          valueSelectDay: e,
        });
        break;
      case 7:
        this.setState({
          valueSelectMonth: e,
        });
        break;
      case 8:
        this.setState({
          valueAddress: e,
        });
        break;
      case 9:
        this.setState({
          valueState: e,
        });
        break;
      case 10:
        this.setState({
          valueCity: e,
        });
        break;
      case 11:
        this.setState({
          valueZipCode: e,
        });
        break;
    }
  };
  _addCustomerCheckin = isCheckIn => {
    const {
      valuePhone,
      valueRefferal,
      valueFirstName,
      valueLastName,
      valueMailAddress,
      valueAddress,
      valueState,
      valueCity,
      valueZipCode,
      valueSelectDay,
      valueSelectMonth,
    } = this.state;
    let params = {
      phone: valuePhone,
      referralCode: valueRefferal,
      firstName: valueFirstName,
      lastName: valueLastName,
      email: valueMailAddress,
      birthday_month: valueSelectMonth,
      birthday_day: valueSelectDay,
      address: valueAddress,
      state: valueState,
      city: valueCity,
      zipcode: valueZipCode,
      isCheckin: isCheckIn,
      storeCode: 'MAX12898',
    };
    if (params.phone == '') {
      return Alert.alert('', 'Please Enter Phone');
    } else if (params.firstName == '') {
      return Alert.alert('', 'Please Enter First Name');
    } else if (params.lastName == '') {
      return Alert.alert('', 'Please Enter Last Name');
    } else {
      this.props.AppCheckInSignUp(params);
      this.props.onClose();
    }
  };
  render() {
    const {onClose} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView
          scrollEnabled={false}
          contentContainerStyle={styles.containerScroll}>
          <Line1
            valuePhone={this.state.valuePhone}
            onChangePhone={this.onChangeText}
            valueRefferal={this.state.valueRefferal}
            onChangeRefferalCode={this.onChangeText}
          />
          <Line2
            valueFirstName={this.state.valueFirstName}
            onChangeFirstName={this.onChangeText}
            valueLastName={this.state.valueLastName}
            onChangeLastName={this.onChangeText}
            valueMailAddress={this.state.valueMailAddress}
            onChangeMailAddress={this.onChangeText}
          />
          <Line3
            valueSelectDay={this.state.valueSelectDay}
            onChangeSelectDay={this.onChangeText}
            valueSelectMonth={this.state.valueSelectMonth}
            onChangeSelectMonth={this.onChangeText}
            valueAddress={this.state.valueAddress}
            onChangeAddress={this.onChangeText}
          />
          <Line4
            valueState={this.state.valueState}
            onChangeState={this.onChangeText}
            valueCity={this.state.valueCity}
            onChangeCity={this.onChangeText}
          />
          <Line5
            valueZipCode={this.state.valueZipCode}
            onChangeZipcode={this.onChangeText}
          />
          <BottomBtn
            onClose={onClose}
            addCustomerCheckin={this._addCustomerCheckin}
          />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {width: '100%', height: '100%'},
  containerScroll: {
    flex: 1,
    backgroundColor: Colors.backgroundModal,
    paddingVertical: 10,
  },
});
