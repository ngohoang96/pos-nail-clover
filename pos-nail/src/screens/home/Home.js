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
  StatusBar,
  Platform,
  ActivityIndicator,
  DeviceEventEmitter,
  NativeEventEmitter,
  ToastAndroid,
} from 'react-native';
import {styles} from './styles';
import PaymentContainer from './payment-container';
import ScrollBottom from './scroll-bottm/index';

import themes, {Colors, Metrics, TextCmp} from '../../themes';

import Grid from './scroll-container/grid/index';
import TechnicianTurn from './scroll-container/technician-turn/index';
import Customer from './scroll-container/customer/index';
import QuickMenu from './scroll-container/quick-menu/index';
import FullMenu from './scroll-container/full-menu/index';
import ModalNailsTechSignIn from './components/ModalNailsTech';
import ModalEmployeesSignIn from './components/ModalEmployeesSignIn';
import ModalManagerSystem from './components/ModalManagerSystem';
import ModalTipsManager from './components/ModalTipsManager';
import ModalSupportsCenter from './components/ModalSupports';

import {connect} from 'react-redux';
import {
  AppCheckIn_GetServices,
  AppCheckIn_GetStaffsTakeTurn,
  AppCheckIn_GetStafsWorking,
  AppCheckIn_GetAllCustomers,
} from './actions';
import moment from 'moment';
import {Logg, ToastLib} from '../../utils';
import {actions, selectors} from '../../stores';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {homeIcon} from '../../assets';
import {countNonUnique} from '../../utils/functions';
import CustomerModal from './modal/customer/CustomerModal';

import {initSignalR} from '../../common-components/InitSignal';
import CustomWebView from '../../common-components/CustomWebView';
// import {
//   BluetoothManager,
//   BluetoothEscposPrinter,
//   BluetoothTscPrinter,
// } from 'react-native-bluetooth-escpos-printer';

class Home extends Component {
  _listeners = [];
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
      modalWebView: false,
      uriWebView: '',
      titleWebView: '',

      //printer state
      devices: null,
      pairedDs: [],
      foundDs: [],
      bleOpend: false,
      loading: true,
      boundAddress: '',
      debugMsg: '',
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
  toogleCustomerModal = visible => {
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

  //show webview modal
  toogleWebView = (uri, title) => {
    this.setState({
      modalWebView: !this.state.modalWebView,
      uriWebView: uri ? uri : '',
      titleWebView: title ? title : '',
    });
  };

  onPressItem = name => {
    // alert(name);
    if (name === 'NAILS TECH') {
      this.setModalVisible(true);
    } else if (name === 'CUSTOMER') {
      this.toogleCustomerModal(true);
    } else if (name === 'EMPLOYEES') {
      this.setModalEmployeesSignIn();
    } else if (name === 'Manager System') {
      this.setModalManagerSystem();
    } else if (name === 'TIPS ADJS') {
      this.setModalTipsManager();
    } else if (name === 'Support Center') {
      this.setModalSupportsCenter();
    } else if ((name = 'BACKOFFICE')) {
      let uri = 'https://bo.nailspaofamerica.com/';
      this.toogleWebView(uri, 'BACKOFFICE');
    }
  };
  UNSAFE_componentWillMount() {
    this.connection = null;
  }
  handleCreateConnection = () => {
    clearInterval(this.intervalConnection);

    this.intervalConnection = setInterval(() => {
      if (this.connection === null) {
        this.connection = initSignalR(data => {
          this._handleSignal(data);
        });
      }
    }, 5000);
  };

  componentWillUnmount() {
    clearInterval(this.intervalConnection);
  }
  componentDidMount() {
    // get danh sách staff và services truyền qua ModalCustomer
    this.getServices({storeCode: 'MAX12898'});
    this.getStaffHome({storeCode: 'MAX12898'});
    this.getStaffWorking({storeCode: 'MAX12898'});
    this.getCustomerWaiting();
    this.getCustomerInService();
    this.getCustomerPendingPayment();

    this.handleCreateConnection();
    // this.handleCheckBluetooth();
  }

  _handleSignal = data => {
    let splitData = data.split('__');
    let storeId = splitData[0];
    let action = splitData[1];
    if (action === 'CustomerSignIn') {
      this.getCustomerWaiting();
      this.getCustomerInService();
      this.getCustomerPendingPayment();
    } else if (action === 'StaffSignIn') {
      this.getStaffHome({storeCode: 'MAX12898'});
    } else if (action === 'StaffSignOut') {
      this.getStaffHome({storeCode: 'MAX12898'});
    } else if (action === 'CustomerAndStaffReload') {
      this.getCustomerWaiting();
      this.getCustomerInService();
      this.getCustomerPendingPayment();
      this.getStaffHome({storeCode: 'MAX12898'});
    }
  };

  //bluetooth
  handleCheckBluetooth = () => {
    BluetoothManager.isBluetoothEnabled().then(
      enabled => {
        this.setState({
          bleOpend: Boolean(enabled),
          loading: false,
        });
      },
      err => {
        err;
      },
    );

    if (Platform.OS === 'ios') {
      let bluetoothManagerEmitter = new NativeEventEmitter(BluetoothManager);
      this._listeners.push(
        bluetoothManagerEmitter.addListener(
          BluetoothManager.EVENT_DEVICE_ALREADY_PAIRED,
          rsp => {
            this._deviceAlreadPaired(rsp);
          },
        ),
      );
      this._listeners.push(
        bluetoothManagerEmitter.addListener(
          BluetoothManager.EVENT_DEVICE_FOUND,
          rsp => {
            this._deviceFoundEvent(rsp);
          },
        ),
      );
      this._listeners.push(
        bluetoothManagerEmitter.addListener(
          BluetoothManager.EVENT_CONNECTION_LOST,
          () => {
            this.setState({
              name: '',
              boundAddress: '',
            });
          },
        ),
      );
    } else if (Platform.OS === 'android') {
      this._listeners.push(
        DeviceEventEmitter.addListener(
          BluetoothManager.EVENT_DEVICE_ALREADY_PAIRED,
          rsp => {
            this._deviceAlreadPaired(rsp);
          },
        ),
      );
      this._listeners.push(
        DeviceEventEmitter.addListener(
          BluetoothManager.EVENT_DEVICE_FOUND,
          rsp => {
            this._deviceFoundEvent(rsp);
          },
        ),
      );
      this._listeners.push(
        DeviceEventEmitter.addListener(
          BluetoothManager.EVENT_CONNECTION_LOST,
          () => {
            this.setState({
              name: '',
              boundAddress: '',
            });
          },
        ),
      );
      this._listeners.push(
        DeviceEventEmitter.addListener(
          BluetoothManager.EVENT_BLUETOOTH_NOT_SUPPORT,
          () => {
            ToastAndroid.show(
              'Device Not Support Bluetooth !',
              ToastAndroid.LONG,
            );
          },
        ),
      );
    }
  };

  _deviceAlreadPaired(rsp) {
    var ds = null;
    if (typeof rsp.devices == 'object') {
      ds = rsp.devices;
    } else {
      try {
        ds = JSON.parse(rsp.devices);
      } catch (e) {}
    }
    if (ds && ds.length) {
      let pared = this.state.pairedDs;
      pared = pared.concat(ds || []);
      this.setState({
        pairedDs: pared,
      });
    }
  }

  _deviceFoundEvent(rsp) {
    //alert(JSON.stringify(rsp))
    var r = null;
    try {
      if (typeof rsp.device == 'object') {
        r = rsp.device;
      } else {
        r = JSON.parse(rsp.device);
      }
    } catch (e) {
      //alert(e.message);
      //ignore
    }
    //alert('f')
    if (r) {
      let found = this.state.foundDs || [];
      if (found.findIndex) {
        let duplicated = found.findIndex(function(x) {
          return x.address == r.address;
        });
        //CHECK DEPLICATED HERE...
        if (duplicated == -1) {
          found.push(r);
          this.setState({
            foundDs: found,
          });
        }
      }
    }
  }

  _selfTest() {
    this.setState(
      {
        loading: true,
      },
      () => {
        BluetoothEscposPrinter.selfTest(() => {});

        this.setState({
          loading: false,
        });
      },
    );
  }

  _scan() {
    this.setState({
      loading: true,
    });
    BluetoothManager.scanDevices().then(
      s => {
        var ss = s;
        var found = ss.found;
        try {
          found = JSON.parse(found); //@FIX_it: the parse action too weired..
        } catch (e) {
          //ignore
        }
        var fds = this.state.foundDs;
        if (found && found.length) {
          fds = found;
        }
        this.setState({
          foundDs: fds,
          loading: false,
        });
      },
      er => {
        this.setState({
          loading: false,
        });
        alert('error' + JSON.stringify(er));
      },
    );
  }

  getStaffHome(params) {
    (params.date = moment(new Date()).format('YYYY-MM-DD')),
      this.props.dispatch(AppCheckIn_GetStaffsTakeTurn(params)).then(result => {
        //alert(JSON.stringify(result))
        Logg.info('Staffs  xxxx ' + JSON.stringify(result));

        // this.setState({dataStaffs: result});

        // Logg.info('Staffs  xxxx ' + JSON.stringify(this.state.dataStaffs));
        let dataArray = [];
        result.map(item => {
          Logg.info('item technician', item);
          dataArray.push({
            name: item.first_name + ' ' + item.last_name,
            idTechnician: item.id,
            staffCode: item.staffCode,
            clockInTime: item.clockInTime,
            technicianDetail: {...item},
          });
        });
        this.props.dispatch(actions.home.getTechnician(dataArray));
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

  getStaffWorking(params) {
    (params.date = moment(new Date()).format('YYYY-MM-DD')),
      this.props.dispatch(AppCheckIn_GetStafsWorking(params)).then(result => {
        Logg.info('result technician working', result);
        this.props.dispatch(actions.cus.getTechnicianWorking(result));
      });
  }

  getServices(params) {
    (params.date = moment(new Date()).format('YYYY-MM-DD')),
      this.props.dispatch(AppCheckIn_GetServices(params)).then(result => {
        Logg.info('result services', result);
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
        this.props.dispatch(actions.home.getAllServices(listserveceSearch));
        console.log('listserveceSearch' + listserveceSearch);
        this.setState({
          listserveceSearch,
          dataListSearch: result,
        });
      });
  }

  getCustomerWaiting() {
    let params = {
      date: moment(new Date()).format('YYYY-MM-DD'),
      type: 'waiting_list',
      storeCode: 'MAX12898',
    };

    this.props.dispatch(AppCheckIn_GetAllCustomers(params)).then(result => {
      let array = result.dataArray[2].Data;
      array = JSON.parse(array);
      array.map(e => {
        e.status = 'waiting';
      });
      this.props.dispatch(actions.home.getCustomerWaiting(array));
    });
  }

  getCustomerPendingPayment() {
    let params = {
      date: moment(new Date()).format('YYYY-MM-DD'),
      type: 'pending_payment',
      storeCode: 'MAX12898',
    };

    this.props.dispatch(AppCheckIn_GetAllCustomers(params)).then(result => {
      // result.map(e => {
      //   e.status = 'pending';
      // });
      // this.props.dispatch(actions.home.getCustomer(result));
      let array = result.dataArray[2].Data;
      array = JSON.parse(array);
      array.map(e => {
        e.status = 'pending';
      });

      this.props.dispatch(actions.home.getCustomerPayment(array));
    });
  }

  getCustomerInService() {
    let params = {
      date: moment(new Date()).format('YYYY-MM-DD'),
      type: 'in_service',
      storeCode: 'MAX12898',
    };

    this.props.dispatch(AppCheckIn_GetAllCustomers(params)).then(result => {
      let array = result.dataArray[2].Data;
      array = JSON.parse(array);
      array.map(e => {
        e.status = 'inservice';
      });
      this.props.dispatch(actions.home.getCustomerInservice(array));
    });
  }

  //modalEmployeesSignIn
  setModalEmployeeVisible = () => {
    this.setState({modalEmployeesSignIn: this.state.modalEmployeesSignIn});
  };

  render() {
    const {
      listserveceSearch,
      modalCustomerVisible,
      modalManagerSystem,
      modalTipsManager,
      modalSupportsCenter,
    } = this.state;
    return (
      <View
        style={[
          styles.container,
          {
            paddingBottom: 60,
          },
        ]}>
        <View style={{flex: 2}}>
          <KeyboardAvoidingView
            style={{
              width: '100%',
              height: '100%',
            }}
            behavior="padding"
            // behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={Platform.select({ios: 0, android: 500})}>
            <View
              style={{
                width: '100%',
                height: '100%',
              }}
              keyboardShouldPersistTaps="handled">
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
          <QuickMenu
            listTechnicianSelected={this.props.listTechnicianSelected}
          />
        </View>
        <View style={{flex: 3}}>
          <View
            style={{
              height: '7%',
              width: '100%',
              backgroundColor: '#f0f0f0',
              flexDirection: 'row',
            }}>
            <View style={styles.wrapper_all}>
              <TextCmp style={styles.txt}>ALL</TextCmp>
            </View>

            <FullMenu listserveceSearch={listserveceSearch || []} />
          </View>
          <ScrollView
            style={{
              width: '100%',
              paddingRight: 3,
            }}>
            <Grid listTechnicianSelected={this.props.listTechnicianSelected} />
          </ScrollView>
        </View>

        <ScrollBottom onPressItem={this.onPressItem} />
        {this.state.modalVisible && (
          <ModalNailsTechSignIn
            modalVisible={this.state.modalVisible}
            onRequestClose={this.setModalVisible}
            onPressClose={this.setModalVisible}
          />
        )}
        {this.state.modalEmployeesSignIn && (
          <ModalEmployeesSignIn
            modalVisible={this.state.modalEmployeesSignIn}
            onRequestClose={this.setModalEmployeesSignIn}
            onPressClose={this.setModalEmployeesSignIn}
          />
        )}
        {modalManagerSystem && (
          <ModalManagerSystem
            modalVisible={this.state.modalManagerSystem}
            onPressClose={this.setModalManagerSystem}
            onRequestClose={this.setModalManagerSystem}
          />
        )}
        {modalTipsManager && (
          <ModalTipsManager
            modalVisible={this.state.modalTipsManager}
            onPressClose={this.setModalTipsManager}
            onRequestClose={this.setModalTipsManager}
            onPressCancel={this.setModalTipsManager}
          />
        )}
        {modalSupportsCenter && (
          <ModalSupportsCenter
            modalVisible={this.state.modalSupportsCenter}
            onPressClose={this.setModalSupportsCenter}
            onRequestClose={this.setModalSupportsCenter}
          />
        )}
        {modalCustomerVisible && (
          <CustomerModal
            visible={modalCustomerVisible}
            onClose={this.toogleCustomerModal}
          />
        )}

        {this.state.modalWebView && (
          <CustomWebView
            isShow={this.state.modalWebView}
            onClose={this.toogleWebView}
            uri={this.state.uriWebView}
            title={this.state.titleWebView}
          />
        )}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  dataListSearch: selectors.home.getlistDataServices(state),
  listTechnician: state.home.listTechnician,
  listTechnicianSelected: selectors.home.selectListTechnicianSelected(state),
});
export default connect(mapStateToProps, null)(Home);
