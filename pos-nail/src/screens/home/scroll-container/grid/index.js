import {connect} from 'react-redux';

import GridSceen from './GridScreen';
import {selectors, actions} from '../../../../stores';

const mapDispatchToProps = (dispatch, {listTechnicianSelected}) => {
  const updateListFullMenu = catname => {
    dispatch(actions.home.updateListFullMenu(catname));
  };
  const updateItemLisFullMenu = item => {
    dispatch(actions.home.updateIsSuccessdedItemListFullMenu(item));
  };

  const updateSelectedService = service => {
    if (listTechnicianSelected.length > 0) {
      dispatch(actions.home.updateServiceTechnician(service));
    } else {
      dispatch(actions.home.updateSelectedService(service));
    }
  };
  return {
    updateListFullMenu,
    updateItemLisFullMenu,
    updateSelectedService,
  };
};
const mapStateToProps = state => ({
  listServicesFullMenu: selectors.home.listServicesFullMenu(state),
  catnameFullMenu: selectors.home.catnameFullMenu(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(GridSceen);
