import {Types} from './actions';
import {Helper} from '../../utils';
import {dataService} from '../../Components/InitScreen/mockData';
const initialState = {
  dataService: dataService,
};

const reducer = Helper.createReducer(initialState, {
  //worker
  [Types.UPDATE_DATA_SERVICE]: ({action, state}) => {
    return {
      ...state,
      dataService: state.dataService.push(action.payload),
    };
  },
});

export default reducer;
