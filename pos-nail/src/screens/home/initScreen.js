/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
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
  KeyboardAvoidingView,
} from 'react-native';
import { styles_home } from './styles-home';
import PaymentContainer from './payment-container';
import ScrollBottom from './scroll-bottm/index';
import ScrollScreen from './scroll-container/scroll-screen';

import TechnicianRepander from '../../Components/InitScreen/TechnicianRepander';
import themes, { Colors, Metrics } from '../../themes';

import Grid from './scroll-container/grid/index';
import TechnicianTurn from './scroll-container/technician-turn/index';
import Customer from './scroll-container/customer/index';
import QuickMenu from './scroll-container/quick-menu/index';
import FullMenu from './scroll-container/full-menu/index';
import ModalNailsTechSignIn from './components/ModalNailsTech';
import ModalCustomerSignIn from './components/ModalCustomerSignIn';
import ModalEmployeesSignIn from './components/ModalEmployeesSignIn';
import ModalManagerSystem from './components/ModalManagerSystem';
import ModalTipsManager from './components/ModalTipsManager'
import ModalSupportsCenter from './components/ModalSupports'

import { connect } from 'react-redux';
import { AppCheckIn_GetServices, AppCheckIn_GetStaffs } from './actions';
import moment from 'moment';
import { Logg } from '../../utils';
import { actions } from '../../stores';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class InitScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      modalVisible: false,
      modalCustomerVisible: false,
      modalEmployeesSignIn: false,
      modalManagerSystem: false,
      modalTipsManager: false,
      modalSupportsCenter: false,
      listserveceSearch: null,
      dataListSearch: null,
      index: 0,
      dataStaffs: null,
    };
  }
  // đóng mở modal technician
  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };
  // đóng mở modal customer
  setModalCustomerVisible = visible => {
    this.setState({ modalCustomerVisible: visible });
  };

  // đóng mở modal employee
  setModalEmployeesSignIn = () => {
    const { modalEmployeesSignIn } = this.state
    this.setState({ modalEmployeesSignIn: !modalEmployeesSignIn })
  }
  // đóng mở modal manager system
  setModalManagerSystem = () => {
    const { modalManagerSystem } = this.state
    this.setState({ modalManagerSystem: !modalManagerSystem })
  }
  // đóng mở modal tips manager
  setModalTipsManager = () => {
    const { modalTipsManager } = this.state
    this.setState({ modalTipsManager: !modalTipsManager })
  }
  // đóng mở modal suports center
  setModalSupportsCenter = () => {
    const { modalSupportsCenter } = this.state
    this.setState({ modalSupportsCenter: !modalSupportsCenter })
  }
  // chọn vào item của scrollBottom
  onPressItem = name => {
    // alert(name);
    if (name === 'Nails Tech Sign In') {
      this.setModalVisible(true);
    } else if (name === 'Customer Sign In') {
      this.setModalCustomerVisible(true);
    } else if (name === 'Employees Sign In') {
      this.setModalEmployeesSignIn();
    } else if (name === 'Manager System') {
      this.setModalManagerSystem();
    } else if (name === 'Tips Manager') {
      this.setModalTipsManager();
    } else if (name === 'Support Center') {
      this.setModalSupportsCenter();
    }
  };
  componentDidMount() {
    // get danh sách staff và services truyền qua ModalCustomer
    this.AppCheckIn_GetServices({ storeCode: 'MAX12898' });
    this.AppCheckIn_GetStaffs({ storeCode: 'MAX12898' });
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
        // this.props.dispatch({
        //   type: 'SAVE_DATA_Staffs',
        //   payload: {
        //     StaffsList: result,
        //   },
        // });
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
        console.log(JSON.stringify(result));
        Logg.info('Services lai xxxx ' + JSON.stringify(result));
        let listserveceSearch = [{ catname: 'All Services', id: -1, name: '' }];
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

        this.props.dispatch(actions.test.getListSelectService(result));
        this.props.dispatch(actions.test.assignlistFullMenu(result))
        this.props.dispatch(actions.test.updateListFullMenu('Additional Options'))
        console.log(listserveceSearch)
        this.setState({
          listserveceSearch,
          dataListSearch: result,
        });
      });
  }

  //modalEmployeesSignIn
  setModalEmployeeVisible = () => {
    this.setState({ modalEmployeesSignIn: this.state.modalEmployeesSignIn });
  };
  render() {
    const { listserveceSearch } = this.state
    console.log(listserveceSearch)
    return (
      <SafeAreaView style={styles_home.container}>

        <View style={{ flex: 1.2 }}>
          <KeyboardAvoidingView contentContainerStyle={{
            width: "100%", height: Metrics.appHeight
          }}>
            <ScrollView contentContainerStyle={{ width: "100%", height: Metrics.appHeight }}>
              <PaymentContainer></PaymentContainer>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
        <View style={{ flex: 0.9 }}>
          <TechnicianTurn></TechnicianTurn>
          {/*
          <TechnicianTurn></TechnicianTurn>*/}
        </View>
        <View style={{ flex: 1.1 }}>
          <Customer></Customer>
        </View>
        <View style={{ flex: 1.2, flexDirection: 'row' }}>
          <QuickMenu></QuickMenu>
          <FullMenu listserveceSearch={listserveceSearch || []}></FullMenu>
        </View>
        <View style={{ flex: 1.2 }}>
          <Grid></Grid>
        </View>

        <ScrollBottom onPressItem={this.onPressItem}></ScrollBottom>
        <ModalNailsTechSignIn
          modalVisible={this.state.modalVisible}
          onRequestClose={this.setModalVisible}
          onPressClose={this.setModalVisible}
        />
        <ModalEmployeesSignIn
          modalVisible={this.state.modalEmployeesSignIn}
          onRequestClose={this.setModalEmployeesSignIn}
          onPressClose={this.setModalEmployeesSignIn}
        />
        <ModalManagerSystem
          modalVisible={this.state.modalManagerSystem}
          onPressClose={this.setModalManagerSystem}
          onRequestClose={this.setModalManagerSystem}
        />
        <ModalTipsManager
          modalVisible={this.state.modalTipsManager}
          onPressClose={this.setModalTipsManager}
          onRequestClose={this.setModalTipsManager}
          onPressCancel={this.setModalTipsManager}
        />
        <ModalSupportsCenter
          modalVisible={this.state.modalSupportsCenter}
          onPressClose={this.setModalSupportsCenter}
          onRequestClose={this.setModalSupportsCenter}
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
  dispatch => ({ dispatch }),
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
