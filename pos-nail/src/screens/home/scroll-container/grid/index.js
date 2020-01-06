import { connect } from 'react-redux'

import GridSceen from './GridScreen'
import { selectors, actions } from '../../../../stores';

const mapDispatchToProps = dispatch => {
  const updateListFullMenu = catname => {
    dispatch(actions.test.updateListFullMenu(catname))
  }
  const updateItemLisFullMenu = item => {
    dispatch(actions.test.updateIsSuccessdedItemListFullMenu(item))
  }
  return {
    updateListFullMenu,
    updateItemLisFullMenu
  }
};
const mapStateToProps = state => ({
  listServicesFullMenu: selectors.test.listServicesFullMenu(state),
  catnameFullMenu: selectors.test.catnameFullMenu(state)
})
export default connect(mapStateToProps, mapDispatchToProps)(GridSceen)