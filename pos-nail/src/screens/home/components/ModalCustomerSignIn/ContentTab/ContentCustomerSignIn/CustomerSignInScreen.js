import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { TextCmp, Metrics } from '../../../../../../themes';
import { normalize } from '../../../../../../themes/FontSize';
import Name from './Name';
import Phone from './Phone';
import HaveAppoiment from './HaveAppoiment';
import SelectNewTechnician from './SelectNewTechnician';
import SelectServices from './SelectServices';
import TimeAppoiment from './TimeAppoiment'
import { Logg } from '../../../../../../utils';

import BottomButton from '../../BottomButton';
import { AppCheckIn_CustomerSignIn } from '../../../../actions';
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valuePhone: '',
      valueFirstName: '',
      valueLastName: '',
      haveAppoiment: '0',
      paramSignIn: null
    };
  }

  onPressFinish = () => {
    const { valuePhone, valueFirstName, valueLastName, haveAppoiment } = this.state
    const { listFinish, getdataSelectedPerferService } = this.props

    let params = {
      phone: valuePhone,
      storeCode: 'MAX12898',
      haveAppt: haveAppoiment,

    };
    let sv = '';
    getdataSelectedPerferService.map((item) => {
      sv += item.id + '_';
    });
    let idStaffs = '';
    listFinish.map((item) => {
      idStaffs += item.id + '_';
    });
    params.staffId = idStaffs.slice(0, idStaffs.length - 1);
    params.serviceId = sv.slice(0, sv.length - 1);
    Logg.info('__param___', params)
    this.props.onPressFinish(params)

  }
  render() {
    Logg.info('data props', this.props.DataTechnician);
    return (
      <View style={styles.container}>
        <Phone
          value={this.state.valuePhone}
          onChangePhone={e => {
            let newText = '';
            let numbers = '0123456789';

            for (var i = 0; i < e.length; i++) {
              if (numbers.indexOf(e[i]) > -1) {
                newText = newText + e[i];
              }
              else {
                // your call back function
                alert("please enter numbers only");
              }
            }
            this.setState({ valuePhone: newText })
          }
          }

        />
        <Name
          valueFirstName={this.state.valueFirstName}
          onChangeFirstName={e => this.setState({ valueFirstName: e })}
          valueLastName={this.state.valueLastName}
          onChangeLastName={e => this.setState({ valueLastName: e })} />
        <HaveAppoiment onSelect={(index, value) => this.setState({
          haveAppoiment: value === 'YES' ? '1' : '0'
        })} />
        {this.state.haveAppoiment === '1' ? <View style={{ flex: 2 }}>
          <TimeAppoiment />
          <View style={{ flex: 1 }}></View>
        </View>
          : (<View style={{ flex: 2 }}>
            <SelectNewTechnician
              // _onPressFinish={data => {
              //   console.log(JSON.stringify(data));
              // }}
              dataStaffs={this.props.dataStaffs}
              // onPress={id => this.props.onPress(id)}
              DataTechnician={this.props.DataTechnician}
            />
            <SelectServices
              dataListSearch={this.props.dataListSearch}
              dataSearchButton={this.props.dataSearchButton}
            />
          </View>)}
        <BottomButton
          containerStyle={{ flex: 1, marginTop: 5, width: Metrics.appWidth * 0.6, borderTopWidth: 1, borderTopColor: 'white' }}
          txt1="Close"
          txt3="Sign In"
          onPress={this.props.onPressIsModal}

          onPressFinish={this.onPressFinish}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 3.5,
    backgroundColor: '#408EBA',
    // paddingHorizontal: '5%',
    // paddingVertical: '3%',
    paddingTop: 1
    // borderTopWidth : 0.5 , 
    // borderTopColor : 'white'
  },
});
