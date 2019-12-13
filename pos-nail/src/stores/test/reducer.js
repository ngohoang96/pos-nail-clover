/**
 * @author: thai.nguyen 
 * @date: 2018-11-29 16:34:14 
 *  
 * 
 */
import { Types, } from './actions';
import { Helper, } from '../../utils';

const initialState = {
  testData: null,
}

const reducer =  Helper.createReducer(initialState, {
  //worker
  [Types.TEST]: ({ state, }) => {
    return {
      ...state,
    };
  },
});

export default reducer;