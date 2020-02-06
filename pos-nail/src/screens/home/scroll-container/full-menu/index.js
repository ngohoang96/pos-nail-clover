import { connect } from 'react-redux'

import FullMenuScreen from './FullMenuScreen'
import { selectors, actions } from '../../../../stores';

const mapDispatchToProps = dispatch => {
  const updateListFullMenu = catname => {
    dispatch(actions.home.updateListFullMenu(catname))
  }
  return {
    updateListFullMenu
  }
};
const mapStateToProps = state => ({
  listDataServices: selectors.home.getlistDataServices(state)
})
export default connect(mapStateToProps, mapDispatchToProps)(FullMenuScreen)