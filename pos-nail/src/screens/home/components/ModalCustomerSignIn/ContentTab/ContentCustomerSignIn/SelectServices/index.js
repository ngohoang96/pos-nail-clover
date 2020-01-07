import { connect } from 'react-redux';
import { actions, selectors } from '../../../../../../../stores';
import SelectServicesScreen from './SelectServicesScreen';
const mapStateToProps = state => ({
  getlistDataServices: selectors.test.getlistDataServices(state),

  getdataSelectedPerferService: selectors.test.getdataSelectedPerferService(state)
  ,
  catnameCustomerServices: selectors.test.catnameCustomerServices(state),
  listService: selectors.cus.listService(state),
  catnameActive: selectors.cus.catnameActive(state)
});

const mapDispatchToProps = dispatch => {
  const getListSelectService = data => {
    dispatch(actions.test.getListSelectService(data));
  };
  const updateDataPerferService = catname => {
    dispatch(actions.test.updateDataPerferService(catname));
  };
  const updateItemListService = item => {
    dispatch(actions.test.updateIsSuccessdedItemListCustomerService(item))
  };

  const updateCatnameService = catname => {
    dispatch(actions.cus.updateCatnameService(catname))
  }
  const updateIssuccessItemService = item => {
    dispatch(actions.cus.updateIssuccessItemService(item))
  }
  return {
    getListSelectService,
    updateDataPerferService,
    updateItemListService, updateCatnameService, updateIssuccessItemService
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectServicesScreen);
