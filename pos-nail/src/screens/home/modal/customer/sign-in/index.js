import CustomerSignIn from './CustomerSignIn';
import {connect} from 'react-redux';
import {Alert} from 'react-native';
import {AppCheckIn_CustomerSignUp} from '../../../actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  const AppCheckInSignUp = params => {
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
export default connect(mapStateToProps, mapDispatchToProps)(CustomerSignIn);
