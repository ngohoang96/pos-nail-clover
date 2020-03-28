import CustomerRegister from './CustomerRegister';
import {connect} from 'react-redux';
import {Alert} from 'react-native';
import {
  AppCheckIn_CustomerSignUp,
  AppCheckIn_CustomerCheckExits,
} from '../../../actions';
import {Logg} from '../../../../../utils';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  const AppCheckInSignUp = params => {
    let {phone} = params;
    let paramsCheck = {
      phone,
      storeCode: 'MAX12898',
    };
    dispatch(AppCheckIn_CustomerCheckExits(paramsCheck)).then(res => {
      Logg.info('res check exist', res);
    });
    dispatch(AppCheckIn_CustomerSignUp(params))
      .then(res => {
        if (res.dataArray && res.dataArray[1].ErrorMessege) {
          Alert.alert('', res.dataArray[1].ErrorMessege);
        } else {
          if (res.dataArray && res.dataArray[0].Status) {
            Alert.alert('', res.dataArray[0].Status);
          } else {
            Alert.alert('', JSON.stringify(res));
          }
        }
      })
      .catch(e => Logg.info(e));
  };
  return {
    AppCheckInSignUp,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomerRegister);
