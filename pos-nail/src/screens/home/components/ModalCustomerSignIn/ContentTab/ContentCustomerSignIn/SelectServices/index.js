import { connect } from 'react-redux';
import { actions, selectors } from '../../../../../../../stores';
import SelectServicesScreen from './SelectServicesScreen';
const mapStateToProps = state => ({
  getlistDataServices: selectors.test.getlistDataServices(state),

  getdataSelectedPerferService: selectors.test.getdataSelectedPerferService(state)
  ,
  catnameCustomerServices: selectors.test.catnameCustomerServices(state)
}
);

const mapDispatchToProps = dispatch => {
  const getListSelectService = data => {
    dispatch(actions.test.getListSelectService(data));
  };
  const updateDataPerferService = catname => {
    dispatch(actions.test.updateDataPerferService(catname));
  };
  const updateItemListService = item => {
    dispatch(actions.test.updateIsSuccessdedItemListCustomerService(item))
  }
  return {
    getListSelectService,
    updateDataPerferService,
    updateItemListService
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectServicesScreen);
