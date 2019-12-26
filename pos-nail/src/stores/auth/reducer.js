import {Types} from './actions';
import {Helper} from '../../utils';

const initialState = {
  test: null,
};

const reducer = Helper.createReducer(initialState, {});
export default reducer;
