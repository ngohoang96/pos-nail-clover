import {connect} from 'react-redux';
import {actions, selectors} from '../../../../../../../stores';
import SelectServicesScreen from './SelectServicesScreen';
const mapStateToProps = state => ({
  getlistDataServices: selectors.test.getlistDataServices(state),
});

const mapDispatchToProps = dispatch => {
  const getListSelectService = data => {
    dispatch(actions.test.getListSelectService(data));
  };
  return {
    getListSelectService,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectServicesScreen);
