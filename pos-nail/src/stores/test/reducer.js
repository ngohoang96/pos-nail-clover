import {Types} from './actions';
import {Helper, Logg} from '../../utils';
import {ToastLib} from '../../utils';
import _ from 'lodash';
// import {dataService} from '../../Components/InitScreen/mockData';
const initialState = {
  dataService: [],
  addSuccess: false,
  testData: [],
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
  dataSelectedPerferService: [],

  //UPdate input  tech clock in / clock out
  inputNailsTechClockIN: '',

  //assign data services full menu
  listServicesFullMenu: [],
  catnameFullMenu: '',
  catnameCustomerServices: '',

  listTechnicianSelected: [],
  listTechnician: [
    {id: '1', name: 'Nguyen Thi 1'},
    {id: '2', name: 'Nguyen Thi 2'},
    {id: '3', name: 'Nguyen Van 3'},
  ],
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
  // gán data Technician Staffs
  [Types.UPDATE_LIST_FINISH]: ({state, action}) => {
    return {
      ...state,
      listFinish: action.payload,
    };
  },
  //gán data customer lis select service
  [Types.GET_LIST_SELECT_SERVICE]: ({state, action}) => {
    return {
      ...state,
      listDataServices: action.payload,
    };
  },
  [Types.UPDATE_LIST_TECHNICIAN]: ({state, action}) => {
    let data_payload = _.clone(action.payload);
    let data_state = _.clone(state.listFinish);

    data_state.map(item => (item.isSelected = false));
    for (let i = 0; i < data_payload.length; ++i) {
      let _index = data_state.findIndex(obj => obj.id === data_payload[i].id);
      data_state[_index].isSelected = !data_state[_index].isSelected;
    }
    return {
      ...state,
      listFinish: data_state,
    };
  },

  //update data services customer sign in
  [Types.UPDATE_DATA_PERFER_SERVICE]: ({state, action}) => {
    // let data = _.clone(action.payload);
    // data = data.filter(e => e.isSelected === true);
    // Logg.create('_dataSelectedPerferService_', data);
    return {
      ...state,
      catnameCustomerServices: action.payload,
    };
  },

  //UPdate input  tech clock in / clock out
  [Types.UPDATE_INPUT_NAILS_TECH_CLOCK_IN]: ({state, action}) => {
    let c = action.payload;
    let inputNailsTechClockIN = state.inputNailsTechClockIN;
    if (c === 'C') {
      inputNailsTechClockIN = '';
    } else if (c === '<<') {
      inputNailsTechClockIN = inputNailsTechClockIN.slice(
        0,
        inputNailsTechClockIN.length - 1,
      );
    } else {
      inputNailsTechClockIN += c;
    }

    return {
      ...state,
      inputNailsTechClockIN,
    };
  },

  //assign data services full menu
  [Types.ASSIGN_LIST_FULLMENU]: ({state, action}) => {
    let data = _.clone(action.payload);
    return {
      ...state,
      listServicesFullMenu: data,
    };
  },
  //update data services full menu
  [Types.UPDATE_LIST_FULLMENU]: ({state, action}) => {
    return {
      ...state,
      catnameFullMenu: action.payload,
    };
  },
  //update item issuccessded list services full menu
  [Types.UPDATE_ITEM_LIST_FULLMENU]: ({state, action}) => {
    let data = _.clone(state.listServicesFullMenu);
    let index = data.findIndex(
      e => e.id === action.payload.id && e.catname === action.payload.catname,
    );
    data[index].isSelected = !data[index].isSelected;
    Logg.info('___isssssss_____', index, '____', data[index].isSelected);
    // data.splice(index, 1);
    return {
      ...state,
      listServicesFullMenu: data,
    };
  },
  //update item issuccessded list services full menu
  [Types.UPDATE_ITEM_LIST_CUSTOMER_SERVICE]: ({state, action}) => {
    let data = _.clone(state.listDataServices);
    let index = data.findIndex(
      e => e.id === action.payload.id && e.catname === action.payload.catname,
    );
    data[index].isSelected = !data[index].isSelected;
    Logg.info('___isssssss_____', index, '____', data[index].isSelected);
    // data.splice(index, 1);
    return {
      ...state,
      listDataServices: data,
    };
  },

  [Types.UPDATE_LIST_TECHNICIAN_SELECTED]: ({state, action}) => {
    let newList = _.clone(state.listTechnicianSelected);
    newList.push(action.payload);
    let newListTechnician = _.clone(state.listTechnician);
    newListTechnician = newListTechnician.filter(
      x => x.id !== action.payload.id,
    );
    return {
      ...state,
      listTechnicianSelected: newList,
    };
  },
  [Types.UNSELECTED_TECHNICIAN]: ({state, action}) => {
    let newList = [];
    newList = _.clone(state.listTechnicianSelected);
    newList = newList.filter(x => x.id !== action.payload.id);
    return {
      ...state,
      listTechnicianSelected: newList,
    };
  },
  [Types.UPDATE_SERVICE_TECHNICIAN]: ({state, action}) => {
    let cloneListTechnician = _.clone(state.listTechnicianSelected);
    cloneListTechnician[0].service = action.payload.service;
    return {
      ...state,
      listTechnicianSelected: cloneListTechnician,
    };
  },
});

export default reducer;
