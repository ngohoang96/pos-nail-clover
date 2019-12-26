import {connect} from 'react-redux';
import {actions, selectors} from '../../../../../../stores';
import CustomerSignInScreen from './CustomerSignInScreen';

const mapStateToProps = state => ({
  DataTechnician: selectors.test.getDataTechnician(state),
});

const mapDispatchToProps = dispatch => {
  // const onPress = async id => {
  //   console.log('aaaaaaaaaaaa' + id);
  //   dispatch(actions.test.updateDataTechnician(id));
  // };
  return {
    // onPress,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomerSignInScreen);
