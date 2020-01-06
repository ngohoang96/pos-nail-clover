import { connect } from 'react-redux'

import FullMenuScreen from './FullMenuScreen'
import { selectors, actions } from '../../../../stores';

const mapDispatchToProps = dispatch => {
  const updateListFullMenu = catname => {
    dispatch(actions.test.updateListFullMenu(catname))
  }
  return {
    updateListFullMenu
  }
};
const mapStateToProps = state => ({
  listDataServices: selectors.test.getlistDataServices(state)
})
export default connect(mapStateToProps, mapDispatchToProps)(FullMenuScreen)