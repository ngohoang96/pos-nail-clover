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
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from './styles';
import PaymentContainer from './payment-container';
import ScrollBottom from './scroll-bottm/index';
import ScrollScreen from './scroll-container/scroll-screen';

import TechnicianRepander from '../../Components/InitScreen/TechnicianRepander';
import themes, {Colors, Metrics, TextCmp} from '../../themes';

import Grid from './scroll-container/grid/index';
import TechnicianTurn from './scroll-container/technician-turn/index';
import Customer from './scroll-container/customer/index';
import QuickMenu from './scroll-container/quick-menu/index';
import FullMenu from './scroll-container/full-menu/index';
import ModalNailsTechSignIn from './components/ModalNailsTech';
import ModalCustomerSignIn from './components/ModalCustomerSignIn';
import ModalEmployeesSignIn from './components/ModalEmployeesSignIn';
import ModalManagerSystem from './components/ModalManagerSystem';
import ModalTipsManager from './components/ModalTipsManager';
import ModalSupportsCenter from './components/ModalSupports';

import {connect} from 'react-redux';
import {AppCheckIn_GetServices, AppCheckIn_GetStaffs} from './actions';
import moment from 'moment';
import {Logg} from '../../utils';
import {actions, selectors} from '../../stores';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {homeIcon} from '../../assets';
import {countNonUnique} from '../../utils/functions';
// countNonUnique();
class Home extends Component {
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
      nailTechDropZone: null,
    };
  }

  // set drop zone nail tech
  setDropZoneNailTech = event => {
    this.setState({
      nailTechDropZone: event.nativeEvent.layout,
    });
  };

  // đóng mở modal technician
  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };
  // đóng mở modal customer
  setModalCustomerVisible = visible => {
    this.setState({modalCustomerVisible: visible});
  };

  // đóng mở modal employee
  setModalEmployeesSignIn = () => {
    const {modalEmployeesSignIn} = this.state;
    this.setState({modalEmployeesSignIn: !modalEmployeesSignIn});
  };
  // đóng mở modal manager system
  setModalManagerSystem = () => {
    const {modalManagerSystem} = this.state;
    this.setState({modalManagerSystem: !modalManagerSystem});
  };
  // đóng mở modal tips manager
  setModalTipsManager = () => {
    const {modalTipsManager} = this.state;
    this.setState({modalTipsManager: !modalTipsManager});
  };
  // đóng mở modal suports center
  setModalSupportsCenter = () => {
    const {modalSupportsCenter} = this.state;
    this.setState({modalSupportsCenter: !modalSupportsCenter});
  };
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
        this.props.dispatch(actions.home.updateListFinish(result));
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
          } else {
            Alert.alert('', JSON.stringify(result));
          }
        }
        result.map(item => (item.isSelected = false));

        this.props.dispatch(actions.home.assignlistFullMenu(result));
        this.props.dispatch(
          actions.home.updateListFullMenu('Additional Options'),
        );

        this.props.dispatch(actions.cus.assignListService(result));
        this.props.dispatch(
          actions.cus.updateCatnameService('Additional Options'),
        );

        console.log(listserveceSearch);
        this.setState({
          listserveceSearch,
          dataListSearch: result,
        });
      });
  }

  //modalEmployeesSignIn
  setModalEmployeeVisible = () => {
    this.setState({modalEmployeesSignIn: this.state.modalEmployeesSignIn});
  };

  render() {
    const {listserveceSearch} = this.state;
    return (
      <View style={styles.container}>
        <View style={{flex: 2}}>
          <KeyboardAvoidingView
            contentContainerStyle={{
              width: '100%',
              height: Metrics.appHeight,
            }}>
            <View
              style={{
                width: '100%',
                height: Metrics.appHeight,
              }}>
              <PaymentContainer
                setDropZoneNailTech={this.setDropZoneNailTech}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
        <View style={{flex: 1.2}}>
          <TechnicianTurn
            nailTechDropZone={this.state.nailTechDropZone}
            listTechnician={this.props.listTechnician}
          />
        </View>
        <View style={{flex: 1.2}}>
          <Customer />
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <QuickMenu />
        </View>
        <View style={{flex: 3}}>
          <View
            style={{
              height: 40,
              width: '100%',
              backgroundColor: '#f0f0f0',
              flexDirection: 'row',
            }}>
            <View style={styles.wrapper_all}>
              <TextCmp style={styles.txt}>ALL</TextCmp>
            </View>
            <FullMenu listserveceSearch={listserveceSearch || []} />
            <View style={styles.wrapper_scrollbtn}>
              <TouchableOpacity style={styles.btn_arrow}>
                <Image source={homeIcon.left_arrow} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn_arrow}>
                <Image source={homeIcon.right_arrow} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: Metrics.appHeight * (1 - 1 / 20 - 1 / 15),
              width: '100%',
              paddingRight: 3,
            }}>
            <Grid />
          </View>
        </View>

        {/* <View style={{ flex: 1, flexDirection: 'row' }}>
          <FullMenu listserveceSearch={listserveceSearch || []} />
        </View>
        <View style={{ flex: 1, paddingRight: 3 }}>
          <Grid></Grid>
        </View>
        <View style={{ flex: 1, paddingRight: 3 }}>
          <Grid></Grid>
        </View> */}

        <ScrollBottom onPressItem={this.onPressItem} />
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
      </View>
    );
  }
}
const mapStateToProps = state => ({
  dataListSearch: selectors.home.getlistDataServices(state),
  listTechnician: state.home.listTechnician,
});
// export default InitScreen;
export default connect(mapStateToProps, null)(Home);

{
  /*  */
}
