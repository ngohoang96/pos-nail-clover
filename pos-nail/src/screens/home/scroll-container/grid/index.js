import { connect } from 'react-redux'

import GridSceen from './GridScreen'
import { selectors, actions } from '../../../../stores';

const mapDispatchToProps = dispatch => {
  const updateListFullMenu = catname => {
    dispatch(actions.home.updateListFullMenu(catname))
  }
  const updateItemLisFullMenu = item => {
    dispatch(actions.home.updateIsSuccessdedItemListFullMenu(item))
  }
  return {
    updateListFullMenu,
    updateItemLisFullMenu
  }
};
const mapStateToProps = state => ({
  listServicesFullMenu: selectors.home.listServicesFullMenu(state),
  catnameFullMenu: selectors.home.catnameFullMenu(state)
})
export default connect(mapStateToProps, mapDispatchToProps)(GridSceen)