import {connect} from 'react-redux';

import PaymentScreen from './payment-screen';

import {selectors, actions} from '../../../stores';
const dataAdd = [{id: '13', name: 'Nguyen Van C'}];
const mapDispatchToProps = dispatch => {
  const update = () => {
    dispatch(actions.test.updateDataService(dataAdd));
  };

  const unselectedTechnician = data => {
    dispatch(actions.test.unSelectedTechnician(data));
  };

  return {update, unselectedTechnician};
};

const mapStateToProps = state => ({
  dataService: selectors.test.getDataService(state),
  listTechnicianSelected: selectors.test.selectListTechnicianSelected(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentScreen);
