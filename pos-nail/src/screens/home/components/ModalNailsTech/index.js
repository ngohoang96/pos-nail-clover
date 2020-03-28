import {connect} from 'react-redux';
import ModalNailsTechScreen from './ModalNailsTechScreen';
import {Alert} from 'react-native';
import {actions, selectors} from '../../../../stores';
import {
  AppCheckIn_TechnicianCheckIn,
  AppCheckIn_TechnicianCheckOut,
  AppCheckIn_TechnicianCloseOut,
  AppCheckIn_GetStafsWorking,
} from '../../actions';
import {Logg} from '../../../../utils';

const mapStateToProps = state => ({
  inputNailsTechClockIN: selectors.home.inputNailsTechClockIN(state),
});

const mapDispatchToProps = dispatch => {
  const _onChangeStaffPinText = c => {
    dispatch(actions.home.updateInputNailsTechClockIn(c));
  };
  const _technicianCheckIN = params => {
    dispatch(AppCheckIn_TechnicianCheckIn(params))
      .then(res => {
        if (res.dataArray && res.dataArray[1].ErrorMessege) {
          Alert.alert('', res.dataArray[1].ErrorMessege);
        } else {
          if (res.dataArray && res.dataArray[0].Status) {
            Alert.alert('', res.dataArray[0].Status);
            let data = {
              date: moment(new Date()).format('YYYY-MM-DD'),
              storeCode: 'MAX12898',
            };
            dispatch(AppCheckIn_GetStafsWorking(data)).then(result => {
              dispatch(actions.cus.getTechnicianWorking(result));
            });
          } else {
            Alert.alert('', JSON.stringify(res));
          }
        }
      })
      .catch(e => Logg.info(e));
  };
  const _technicianCheckOut = params => {
    dispatch(AppCheckIn_TechnicianCheckOut(params))
      .then(res => {
        if (res.dataArray && res.dataArray[1].ErrorMessege) {
          Alert.alert('', res.dataArray[1].ErrorMessege);
        } else {
          if (res.dataArray && res.dataArray[0].Status) {
            Alert.alert('', res.dataArray[0].Status);
            let data = {
              date: moment(new Date()).format('YYYY-MM-DD'),
              storeCode: 'MAX12898',
            };
            dispatch(AppCheckIn_GetStafsWorking(data)).then(result => {
              dispatch(actions.cus.getTechnicianWorking(result));
            });
          } else {
            Alert.alert('', JSON.stringify(res));
          }
        }
      })
      .catch(e => Logg.info(e));
  };
  const _technicianCloseOut = params => {
    dispatch(AppCheckIn_TechnicianCloseOut(params))
      .then(res => {
        if (res.dataArray && res.dataArray[1].ErrorMessege) {
          Alert.alert('', res.dataArray[1].ErrorMessege);
        } else {
          if (res.dataArray && res.dataArray[0].Status) {
            Alert.alert('', res.dataArray[0].Status);
            let data = {
              date: moment(new Date()).format('YYYY-MM-DD'),
              storeCode: 'MAX12898',
            };
            dispatch(AppCheckIn_GetStafsWorking(data)).then(result => {
              dispatch(actions.cus.getTechnicianWorking(result));
            });
          } else {
            Alert.alert('', JSON.stringify(res));
          }
        }
      })
      .catch(e => Logg.info(e));
  };
  return {
    _onChangeStaffPinText,
    _technicianCheckIN,
    _technicianCheckOut,
    _technicianCloseOut,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalNailsTechScreen);
