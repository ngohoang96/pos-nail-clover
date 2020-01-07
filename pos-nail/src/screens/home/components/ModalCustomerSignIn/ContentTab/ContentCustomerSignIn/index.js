import { connect } from 'react-redux';
import { actions, selectors } from '../../../../../../stores';
import CustomerSignInScreen from './CustomerSignInScreen';
import { Alert } from 'react-native'
import { AppCheckIn_CustomerSignIn } from '../../../../actions';
import { Logg } from '../../../../../../utils';
const mapStateToProps = state => ({
  DataTechnician: selectors.test.getDataTechnician(state),
  listFinish: state.test.listFinish,
  getdataSelectedPerferService: selectors.test.getdataSelectedPerferService(state),
  getlistDataServices: selectors.test.getlistDataServices(state)
});

const mapDispatchToProps = dispatch => {
  const onPressFinish = params => {
    dispatch(AppCheckIn_CustomerSignIn(params))
      .then((result) => {
        Alert.alert('', result.dataArray[1].ErrorMessege);
        // alert(JSON.stringify(params))
      })
      .catch((e) => Logg.info(e))
  }
  return {
    onPressFinish
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomerSignInScreen);
