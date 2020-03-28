import {connect} from 'react-redux';
import SelectServicesScreen from './SelectServicesScreen';
import {actions, selectors} from '../../../../../../stores';
const mapStateToProps = state => ({
  typeServices: state.home.listTypeServices,
  listServicesItem: selectors.home.listServicesFullMenu(state),
  listServices: selectors.cus.listService(state),
  listSelectedServices: state.cus.listSelectedServices,
});

const mapDispatchToProps = dispatch => {
  const updateSelectedService = data => {
    dispatch(actions.cus.updateSelectedServices(data));
  };
  return {
    updateSelectedService,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectServicesScreen);
