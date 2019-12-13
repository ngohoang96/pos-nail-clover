import {connect} from 'react-redux';

import PaymentScreen from './payment-screen';

import {selectors, actions} from '../../../stores';
const dataAdd = {id: '13', name: 'Nguyen Van C'};
const mapDispatchToProps = dispatch => {
  const updateDataService = () => {
    debugger;
    dispatch(actions.test.updateDataService(dataAdd));
  };
  return {updateDataService};
};

const mapStateToProps = state => ({
  dataService: selectors.test.getDataService(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentScreen);
