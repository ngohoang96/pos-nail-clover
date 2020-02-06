import {connect} from 'react-redux';

import Payment from './Payment';

import {selectors, actions} from '../../../stores';
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
  };

  const unSelectedService = () => {
    dispatch(actions.home.updateSelectedService(null));
  };
  return {update, unselectedTechnician, unSelectedCustomer, unSelectedService};
};

const mapStateToProps = state => ({
  dataService: selectors.home.getDataService(state),
  listTechnicianSelected: selectors.home.selectListTechnicianSelected(state),
  listServices: selectors.home.selectListServices(state),
  paymentBill: selectors.home.selectPaymentBill(state),
  selectedCustomer: selectors.home.getSelectedCustomer(state),
  selectedService: selectors.home.getSelectedService(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
