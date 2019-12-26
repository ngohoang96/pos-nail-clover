import {connect} from 'react-redux';
import {actions, selectors} from '../../../../../../../stores';
import SelectServicesScreen from './SelectServicesScreen';
const mapStateToProps = state => ({
  getlistDataServices: selectors.test.getlistDataServices(state),
});

const mapDispatchToProps = dispatch => {
  const updateListSelectService = data => {
    dispatch(actions.test.updateListSelectService(data));
  };
  return {
    updateListSelectService,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectServicesScreen);
