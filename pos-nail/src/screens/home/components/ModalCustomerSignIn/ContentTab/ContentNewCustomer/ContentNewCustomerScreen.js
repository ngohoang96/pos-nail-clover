import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Alert,
} from 'react-native';

// import Line1 from '../../../../modal/customer/sign-in/Line1/LineOne';
// import Line2 from '../../../../modal/customer/sign-in/Line2/Line2';
// import Line3 from '../../../../modal/customer/sign-in/Line3/Line3';
// import Line4 from '../../../../modal/customer/sign-in/Line4/Line4';
// import Line5 from '../../../../modal/customer/sign-in/Line5';
import BottomButton from '../../BottomButton';
export default class ContentNewCustomerScreen extends Component {
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
  _onPressAddCustomer_Checkin = isCheckIn => {
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
    }
  };
  render() {
    return (
      <View style={styles.container29}>
        <ScrollView
          scrollEnabled={false}
          contentContainerStyle={styles.containerScroll}>
          {/* <Line1
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
          /> */}
          <BottomButton
            containerStyle={{
              flex: 1,
              marginTop: 5,
              borderTopColor: 'white',
              borderTopWidth: 1,
            }}
            onPressAddCustomer={() => this._onPressAddCustomer_Checkin(0)}
            onPressFinish={() => this._onPressAddCustomer_Checkin(1)}
            txt1="Close"
            txt2="Add Customer"
            txt3="Add & CheckIn"
            onPress={this.props.onPressIsModal}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container29: {flex: 3.5},
  containerScroll: {
    flex: 1,
    backgroundColor: '#408EBA',
    paddingVertical: 10,
  },
});
//05.0.6.2.9
