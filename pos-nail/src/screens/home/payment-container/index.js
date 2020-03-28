import {connect} from 'react-redux';

import Payment from './Payment';

import {selectors, actions} from '../../../stores';
import {
  AppCheckIn_GiftCardInfos,
  AppCheckIn_TicketAction,
  AppCheckIn_GetAllCustomers,
} from '../actions';
import moment from 'moment';
import {Logg} from '../../../utils';
import {storeId} from '../../../values/AppValue';
const dataAdd = [{id: '13', name: 'Nguyen Van C'}];
const mapDispatchToProps = dispatch => {
  const update = () => {
    dispatch(actions.home.updateDataService(dataAdd));
  };

  const unselectedTechnician = data => {
    dispatch(actions.home.unSelectedTechnician(data));
  };

  const unSelectedCustomer = () => {
    dispatch(actions.home.updateSelectedCustomer(null));
    dispatch(actions.home.resetPaymentBill());
  };

  const unSelectedService = () => {
    dispatch(actions.home.updateSelectedService(null));
  };

  const deleteSelectedService = data => {
    dispatch(actions.home.unSelectedService(data));
  };

  const updateTipsPayment = tips => {
    dispatch(actions.home.updateTipsPayment(tips));
  };

  const giftCardCheckExist = value => {
    let params = {
      storeId: storeId,
      giftCardNo: value,
    };
    return dispatch(AppCheckIn_GiftCardInfos(params)).then(result => {
      return result.dataArray;
    });
  };

  const onSubmitPayment = params => {
    return dispatch(AppCheckIn_TicketAction(params)).then(res => {
      return res;
    });
  };

  const onResetPayment = () => {
    dispatch(actions.home.resetPaymentBill());
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
  };
  const cancelService = () => {
    dispatch(actions.home.cancelServiceCard());
  };

  const editTechnician = data => {
    dispatch(actions.home.editTechnician(data));
  };

  const editService = data => {
    dispatch(actions.home.editServices(data));
  };
  return {
    update,
    unselectedTechnician,
    unSelectedCustomer,
    unSelectedService,
    deleteSelectedService,
    updateTipsPayment,
    giftCardCheckExist,
    onSubmitPayment,
    onResetPayment,
    cancelService,
    editTechnician,
    editService,
  };
};

const mapStateToProps = state => ({
  dataService: selectors.home.getDataService(state),
  listTechnicianSelected: selectors.home.selectListTechnicianSelected(state),
  listServicePayment: selectors.home.selectListServices(state),
  paymentBill: selectors.home.selectPaymentBill(state),
  selectedCustomer: selectors.home.getSelectedCustomer(state),
  selectedService: selectors.home.getSelectedService(state),

  //change technician + service
  listTechnicians: state.cus.listTechnician,
  typeServices: state.home.listTypeServices,
  listServicesItem: selectors.home.listServicesFullMenu(state),
  listServices: selectors.cus.listService(state),
  listSelectedServices: state.cus.listSelectedServices,
});

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
