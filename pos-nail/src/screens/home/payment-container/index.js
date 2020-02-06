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

  return {update, unselectedTechnician};
};

const mapStateToProps = state => ({
  dataService: selectors.home.getDataService(state),
  listTechnicianSelected: selectors.home.selectListTechnicianSelected(state),
  listServices: selectors.home.selectListServices(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
