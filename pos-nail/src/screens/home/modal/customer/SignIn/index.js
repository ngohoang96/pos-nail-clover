import {connect} from 'react-redux';
import {Alert} from 'react-native';
import CustomerSignIn from './CustomerSignIn';
import {selectors, actions} from '../../../../../stores';
import {
  AppCheckIn_CustomerSignIn,
  AppCheckIn_GetAllCustomers,
  AppCheckIn_CustomerCheckExits,
} from '../../../actions';
import {Logg} from '../../../../../utils';
import moment from 'moment';

const mapStateToProps = state => ({
  listTechnicians: selectors.home.selectListTechnicianSelected(state),
  listTechnicianSelected: state.cus.listSelectedTechnician,
  listServicesSelected: state.cus.listSelectedServices,
});

const mapDispatchToProps = dispatch => {
  const signIn = params => {
    dispatch(AppCheckIn_CustomerSignIn(params))
      .then(result => {
        Alert.alert('', result.dataArray[1].ErrorMessege);
        let params_waiting = {
          date: moment(new Date()).format('YYYY-MM-DD'),
          type: 'waiting_list',
          storeCode: 'MAX12898',
        };

        let params_inservice = {
          date: moment(new Date()).format('YYYY-MM-DD'),
          type: 'in_service',
          storeCode: 'MAX12898',
        };

        let params_payment = {
          date: moment(new Date()).format('YYYY-MM-DD'),
          type: 'pending_payment',
          storeCode: 'MAX12898',
        };

        dispatch(AppCheckIn_GetAllCustomers(params_waiting)).then(result => {
          let array = result.dataArray[2].Data;
          array = JSON.parse(array);
          array.map(e => {
            e.status = 'waiting';
          });
          dispatch(actions.home.getCustomerWaiting(array));
        });

        dispatch(AppCheckIn_GetAllCustomers(params_inservice)).then(result => {
          let array = result.dataArray[2].Data;
          array = JSON.parse(array);
          array.map(e => {
            e.status = 'inservice';
          });
          dispatch(actions.home.getCustomerInservice(array));
        });

        dispatch(AppCheckIn_GetAllCustomers(params_payment)).then(result => {
          result.map(e => {
            e.status = 'pending';
          });
          dispatch(actions.home.getCustomerPayment(result));
        });
      })
      .catch(e => Logg.info(e));
  };
  const checkCustomerExist = params => {
    return dispatch(AppCheckIn_CustomerCheckExits(params))
      .then(result => {
        if (result) {
          return result;
        }
      })
      .catch(e => Logg.info(e));
  };
  return {
    signIn,
    checkCustomerExist,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomerSignIn);
