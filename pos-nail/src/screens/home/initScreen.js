/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Modal,
  Alert,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {styles_home} from './styles-home';
import PaymentContainer from './payment-container';
import ScrollBottom from './scroll-bottm/index';
import ScrollScreen from './scroll-container/scroll-screen';

import TechnicianRepander from '../../Components/InitScreen/TechnicianRepander';
import themes, {Colors} from '../../themes';

import Grid from './scroll-container/grid/index';
import TechnicianTurn from './scroll-container/technician-turn/index';
import Customer from './scroll-container/customer/index';
import QuickMenu from './scroll-container/quick-menu/index';
import FullMenu from './scroll-container/full-menu/index';
import ModalNailsTechSignIn from './components/ModalNailsTech';
import ModalCustomerSignIn from './components/ModalCustomerSignIn';

import {connect} from 'react-redux';
import {AppCheckIn_GetServices, AppCheckIn_GetStaffs} from './actions';
import moment from 'moment';
import {Logg} from '../../utils';
import {actions} from '../../stores';

class InitScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      modalVisible: false,
      modalCustomerVisible: false,

      listserveceSearch: null,
      dataListSearch: null,
      index: 0,
      dataStaffs: null,
    };
  }
  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };
  setModalCustomerVisible = visible => {
    this.setState({modalCustomerVisible: visible});
  };
  onPressItem = name => {
    // alert(name);
    if (name === 'Nails Tech Sign In') {
      this.setModalVisible(true);
    } else if (name === 'Customer Sign In') {
      this.setModalCustomerVisible(true);
    }
  };
  componentDidMount() {
    this.AppCheckIn_GetServices({storeCode: 'MAX12898'});
    this.AppCheckIn_GetStaffs({storeCode: 'MAX12898'});
  }
  AppCheckIn_GetStaffs(params) {
    (params.date = moment(new Date()).format('YYYY-MM-DD')),
      this.props.dispatch(AppCheckIn_GetStaffs(params)).then(result => {
        //alert(JSON.stringify(result))
        Logg.info('Staffs  xxxx ' + JSON.stringify(result));

        // this.setState({dataStaffs: result});

        // Logg.info('Staffs  xxxx ' + JSON.stringify(this.state.dataStaffs));
        result.map(item => (item.isSelected = false));
        this.props.dispatch(actions.test.updateListFinish(result));
        this.props.dispatch({
          type: 'SAVE_DATA_Staffs',
          payload: {
            StaffsList: result,
          },
        });
        if (result.dataArray && result.dataArray[1].ErrorMessege) {
          Alert.alert('', result.dataArray[1].ErrorMessege);
        } else {
          if (result.dataArray && result.dataArray[0].Status) {
            // Alert.alert('', result.dataArray[0].Status )
          } else {
            Alert.alert('', JSON.stringify(result));
          }
        }
      });
  }
  AppCheckIn_GetServices(params) {
    (params.date = moment(new Date()).format('YYYY-MM-DD')),
      this.props.dispatch(AppCheckIn_GetServices(params)).then(result => {
        // console.log(JSON.stringify(result));
        Logg.info('Services lai xxxx ' + JSON.stringify(result));
        let listserveceSearch = [{catname: 'All Services', id: -1, name: ''}];
        if (result) {
          result.map(item => {
            if (item.id == '-1') {
              listserveceSearch.push(item);
            }
          });
        }
        if (result.dataArray && result.dataArray[1].ErrorMessege) {
          Alert.alert('', result.dataArray[1].ErrorMessege);
        } else {
          if (result.dataArray && result.dataArray[0].Status) {
            // Alert.alert('', result.dataArray[0].Status )
          } else {
            Alert.alert('', JSON.stringify(result));
          }
        }
        result.map(item => (item.isSelected = false));
        this.props.dispatch(actions.test.updateListSelectService(result));
        this.setState({
          listserveceSearch,
          dataListSearch: result,
        });
      });
  }
  render() {
    return (
      <SafeAreaView style={styles_home.container}>
        <View style={{flex: 1.2}}>
          <PaymentContainer></PaymentContainer>
        </View>
        <View style={{flex: 0.9}}>
          <TechnicianTurn></TechnicianTurn>
          {/*
          <TechnicianTurn></TechnicianTurn>*/}
        </View>
        <View style={{flex: 1.1}}>
          <Customer></Customer>
        </View>
        <View style={{flex: 1.2, flexDirection: 'row'}}>
          <QuickMenu></QuickMenu>
          <FullMenu></FullMenu>
        </View>
        <View style={{flex: 1.2}}>
          <Grid></Grid>
        </View>

        <ScrollBottom onPressItem={this.onPressItem}></ScrollBottom>
        <ModalNailsTechSignIn
          modalVisible={this.state.modalVisible}
          onRequestClose={this.setModalVisible}
          onPressClose={this.setModalVisible}
        />
        <ModalCustomerSignIn
          dataStaffs={this.state.dataStaffs}
          dataSearchButton={this.state.listserveceSearch}
          dataListSearch={this.state.dataListSearch}
          onPressIsModal={() => {
            this.setState({
              modalCustomerVisible: !this.state.modalCustomerVisible,
            });
          }}
          modalVisible={this.state.modalCustomerVisible}
          onRequestClose={this.setModalCustomerVisible}
        />
      </SafeAreaView>
    );
  }
}
// export default InitScreen;
export default connect(
  state => ({}),
  dispatch => ({dispatch}),
)(InitScreen);

{
  /*
  const styles = StyleSheet.create({
  fx3: {flex: 3, backgroundColor: 'white'},
});

           <Modal
          animationType={'none'}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0,0,0.5)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: "60%",
                height: '50%',
                backgroundColor: Colors.darkBlue,

              }}>
              <View style = {{flex : 0.7 , backgroundColor : Colors.darkBlue}}></View>
              <View style = {{flex : 0.6 , backgroundColor : 'red'}}></View>
              <View style = {{flex : 2 , backgroundColor : 'white'}}></View>
              <View style = {{flex : 0.7 , backgroundColor : 'red'}}></View>
            </View>
          </View>
        </Modal>
          <TouchableOpacity
                  onPress={() => {
                    this.setModalVisible(false);
                  }}>
                  <Text>Hide Modal</Text>
                </TouchableOpacity>
           <PaymentContainer></PaymentContainer>
      <View style={styles.fx3}>
        <ScrollScreen></ScrollScreen>
        <ScrollBottom></ScrollBottom>
      </View>
           <PaymentContainer></PaymentContainer>
        <View style={styles.fx3}>
          <ScrollScreen></ScrollScreen>
          <ScrollBottom></ScrollBottom>
        </View>
 <ScrollView
       horizontal = {false}
          style={{
            position: 'absolute',
          }}>
          {[1, 2, 3, 4, 5, 5, 6, 6,4].map((item, index) => {
            return <TechnicianRepander name="test"></TechnicianRepander>;
          })}
        </ScrollView>
      
          <View
          style={{
            width: (themes.width * 0.8) / 3.8,
            height: themes.height,
            backgroundColor: 'transparent',
            position: 'absolute',
            left: (themes.width * 0.8) / 3.8,
          }}>
          {[1, 2, 3, 5, 6, 2, 3, 5, 6].map(item => {
            return <TechnicianRepander name="test"></TechnicianRepander>;
          })}
        </View>*/
}
