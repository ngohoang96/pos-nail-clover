import {Types} from './actions';
import {Helper} from '../../utils';
import {ToastLib} from '../../utils';
import _ from 'lodash';
// import {dataService} from '../../Components/InitScreen/mockData';
const initialState = {
  dataService: [],
  addSuccess: false,
  testData: [],
  gainerData: [],
  historyWithdraw: {
    total: 0,
    custom: null,
    items: [],
  },
  isLoadingHistoryWithdraw: false,
  DataTechnician: [
    {id: 1, check: false},
    {id: 2, check: false},
    {id: 3, check: false},
    {id: 4, check: false},
    {id: 5, check: false},
    {id: 6, check: false},
  ],
  listFinish: [],
  listDataServices: [],
};

const reducer = Helper.createReducer(initialState, {
  //worker
  [Types.UPDATE_DATA_TECHNICIAN]: ({state, action}) => {
    let dataTechnician = _.clone(state.DataTechnician);
    dataTechnician[action.payload].check = !dataTechnician[action.payload]
      .check;
    console.log(dataTechnician + action.payload);
    return {
      ...state,
      DataTechnician: dataTechnician,
    };
  },
  [Types.UPDATE_DATA_SERVICE]: ({state, action}) => {
    let index = _.clone(state.dataService).findIndex(
      e => e.id === action.payload[0].id,
    );
    let data = _.clone(state.dataService);
    if (index === -1) {
      data = _.clone(state.dataService).concat(action.payload);
      // SnackBar.showSuccess('Thêm thành công');
      ToastLib.show('Thêm thành công');
    } else {
      // SnackBar.showError('Đã tồn tại');
      ToastLib.show('Đã tồn tại');
    }
    return {
      ...state,
      dataService: data,
      addSuccess: state.addSuccess,
    };
  },
  [Types.DELETE_DATASERVICE]: ({state, action}) => {
    let data = _.clone(state.dataService);
    let index = data.findIndex(e => e.id === action.id);
    console.log('logg -' + index);
    data.splice(index, 1);

    return {
      ...state,
      dataService: data,
    };
  },
  [Types.GET_GAINER_DATA_SUCCESS]: ({state, action}) => {
    return {
      ...state,
      gainerData: action.payload,
    };
  },
  [Types.GET_GAINER_DATA]: ({state, action}) => {
    return {
      ...state,
      testData: action.payload,
    };
  },
  [Types.UPDATE_HISTORY_WITHDRAW]: ({state, action}) => {
    return {
      ...state,
      historyWithdraw: action.payload,
    };
  },
  [Types.UPDATE_ISLOADING_HISTORY]: ({state, action}) => {
    return {
      ...state,
      isLoadingHistoryWithdraw: action.payload,
    };
  },
  [Types.UPDATE_LIST_FINISH]: ({state, action}) => {
    return {
      ...state,
      listFinish: action.payload,
    };
  },
  [Types.UPDATE_ISSELECTED_SELECT_TECHNICIAN]: ({state, action}) => {
    let data = _.clone(state.listFinish);
    let _index = data.findIndex(e => e.id === action.payload);
    data[_index].isSelected = !data[_index].isSelected;

    return {
      ...state,
      listFinish: data,
    };
  },
  [Types.UPDATE_LIST_SELECT_SERVICE]: ({state, action}) => {
    return {
      ...state,
      listDataServices: action.payload,
    };
  },
});

export default reducer;
