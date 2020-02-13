import {Types} from './actions';
import {Logg, Helper} from '../../utils';

import _ from 'lodash';

const initialState = {
  listService: [],
  catnameActive: 'Additional Options',
  listSelectedTechnician: [],
  listSelectedServices: [],
  listTechnician: [],
  selectedTypeService: 'All Services',
};
const reducer = Helper.createReducer(initialState, {
  [Types.ASSIGN_LIST_SERVICE]: ({state, action}) => {
    let data = _.clone(action.payload);
    Logg.info('___loggdata', data);
    return {
      ...state,
      listService: data,
    };
  },
  [Types.UPDATE_CATNAME_SERIVICE]: ({state, action}) => {
    return {
      ...state,
      catnameActive: action.payload,
    };
  },
  [Types.UPDATE_ISSUCCESS_ITEM_SERVICE]: ({state, action}) => {
    return {
      ...state,
      // listService: data
    };
  },
  [Types.UPDATE_SELECTED_TECHNICIAN]: ({state, action}) => {
    return {
      ...state,
      listSelectedTechnician: action.payload,
    };
  },
  [Types.UPDATE_SELECTED_SERVICES]: ({state, action}) => {
    return {
      ...state,
      listSelectedServices: action.payload,
    };
  },
  [Types.GET_LIST_TECHNICIAN_WORKING]: ({state, action}) => {
    return {
      ...state,
      listTechnician: action.payload,
    };
  },
  [Types.UPDATE_SELECTED_TYPE_SERVICE]: ({state, action}) => {
    return {
      ...state,
      selectedTypeService: action.payload,
    };
  },
});
export default reducer;
