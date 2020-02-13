import {connect} from 'react-redux';
import {Alert} from 'react-native';
import CustomerRegister from './CustomerRegister';
import {selectors} from '../../../../../stores';

const mapStateToProps = state => ({
  listTechnicians: selectors.home.selectListTechnicianSelected(state),
});

const mapDispatchToProps = dispatch => {
  const AppCheckInSignUp = params => {};
  return {
    AppCheckInSignUp,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomerRegister);
