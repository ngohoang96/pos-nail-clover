import {connect} from 'react-redux';
import {actions, selectors} from '../../../../../../../stores';
import SelectServicesScreen from './SelectServicesScreen';
const mapStateToProps = state => ({
  getlistDataServices: selectors.test.getlistDataServices(state),
  // getdataSelectedPerferService: selectors.test.getdataSelectedPerferService(
  //   state,
  // ),
});

const mapDispatchToProps = dispatch => {
  const getListSelectService = data => {
    dispatch(actions.test.getListSelectService(data));
  };
  const updateDataPerferService = data => {
    dispatch(actions.test.updateDataPerferService(data));
  };
  return {
    getListSelectService,
    updateDataPerferService,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectServicesScreen);
