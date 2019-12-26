import {connect} from 'react-redux';

import PaymentScreen from './payment-screen';

import {selectors, actions} from '../../../stores';
const dataAdd = [{id: '13', name: 'Nguyen Van C'}];
const mapDispatchToProps = dispatch => {
  const update = () => {
    dispatch(actions.test.updateDataService(dataAdd));
  };
  // const getHistory = () => {
  //   dispatch(actions.test.fetchHistoryWithDraw());
  // };
  return {update};
};

const mapStateToProps = state => ({
  dataService: selectors.test.getDataService(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentScreen);
