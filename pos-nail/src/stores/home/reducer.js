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

  customerWaiting: [],
  customerInservice: [],
  customerPayment: [],
  selectedCustomer: null,
  listTechnicianSelected: [],
  listTechnician: [],
  selectedService: null,
  listService: [],
  paymentBill: {
    subTotal: 0,
    couponText: '',
    couponPrice: 0,
    giftCard: '',
    giftCardPrice: 0,
    tip: 0,
    discount: 0,
    total: 0,
  },
  services: null,
  listTypeServices: null,
  selectedTechnician: [],
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
    let cloneListService = _.clone(state.listService);
    let cloneSelectedService = _.clone(state.selectedService);

    if (state.selectedService === null) {
      newList.push(action.payload);
    } else {
      newList = [];
      cloneListService.unshift(action.payload);
      cloneListService[0].service = state.selectedService.service;
      cloneListService[0].amount = state.selectedService.amount
        ? state.selectedService.amount
        : '';
      cloneListService[0].total = state.selectedService.amount;
      cloneListService[0].quantity = '1';
      cloneListService[0].tip = '';
      cloneListService[0].serviceId = state.selectedService.idService;
      cloneSelectedService = null;
    }
    let subTotal = 0;
    cloneListService.map(e => {
      if (!isNaN(e.total)) {
        subTotal += parseFloat(e.total);
      }
    });

    return {
      ...state,
      listTechnicianSelected: newList,
      listService: cloneListService,
      selectedService: cloneSelectedService,
      paymentBill: {
        ...state.paymentBill,
        subTotal: subTotal + '',
      },
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
    cloneListTechnician[0].quantity = '1';
    cloneListTechnician[0].amount = action.payload.amount
      ? action.payload.amount
      : '';
    cloneListTechnician[0].total = action.payload.amount;
    cloneListTechnician[0].tip = '';
    cloneListTechnician[0].serviceId = action.payload.idService;
    let newListTechnicianSelected = [];
    if (cloneListTechnician.length > 1) {
      newListTechnicianSelected = cloneListTechnician.splice(
        1,
        cloneListTechnician.length,
      );
    } else {
      newListTechnicianSelected = [];
    }
    let subTotal = 0;
    let list = cloneListTechnician.concat(state.listService);
    list.map(e => {
      if (!isNaN(e.total)) {
        subTotal += parseFloat(e.total);
      }
    });
    return {
      ...state,
      listTechnicianSelected: newListTechnicianSelected,
      listService: list,
      paymentBill: {
        ...state.paymentBill,
        subTotal: subTotal + '',
      },
    };
  },
  [Types.UPDATE_QUANTITY_SERVICE]: ({state, action}) => {
    let newListService = _.clone(state.listService);
    let subTotal = 0;
    newListService[action.payload.index].quantity = action.payload.quantity;
    if (newListService[action.payload.index].tip !== '') {
      newListService[action.payload.index].total =
        newListService[action.payload.index].amount * action.payload.quantity +
        parseFloat(newListService[action.payload.index].tip);
    } else {
      newListService[action.payload.index].total =
        newListService[action.payload.index].amount * action.payload.quantity;
    }
    newListService.map(e => {
      if (!isNaN(e.total)) {
        subTotal += parseFloat(e.total);
      }
    });
    return {
      ...state,
      listService: newListService,
      paymentBill: {
        ...state.paymentBill,
        subTotal,
      },
    };
  },
  [Types.UPDATE_AMOUNT_SERVICE]: ({state, action}) => {
    let newListService = _.clone(state.listService);
    let subTotal = 0;
    newListService[action.payload.index].amount = action.payload.amount;
    if (newListService[action.payload.index].tip !== '') {
      newListService[action.payload.index].total =
        newListService[action.payload.index].quantity * action.payload.amount +
        parseFloat(newListService[action.payload.index].tip);
    } else {
      newListService[action.payload.index].total =
        newListService[action.payload.index].quantity * action.payload.amount;
    }

    newListService.map(e => {
      if (!isNaN(e.total)) {
        subTotal += parseFloat(e.total);
      }
    });
    return {
      ...state,
      listService: newListService,
      paymentBill: {
        ...state.paymentBill,
        subTotal,
      },
    };
  },
  [Types.UPDATE_TIP_SERVICE]: ({state, action}) => {
    let newListService = _.clone(state.listService);
    let subTotal = 0;
    let tip = 0;
    newListService[action.payload.index].tip = action.payload.tip;
    if (newListService[action.payload.index].tip !== '') {
      newListService[action.payload.index].total =
        newListService[action.payload.index].amount *
          newListService[action.payload.index].quantity +
        parseFloat(action.payload.tip);
    } else {
      newListService[action.payload.index].total =
        newListService[action.payload.index].amount *
        newListService[action.payload.index].quantity;
    }
    newListService.map(e => {
      if (!isNaN(e.total)) {
        subTotal += parseFloat(e.total);
      }
      if (!isNaN(e.tip)) {
        tip += parseFloat(e.tip);
      }
    });
    return {
      ...state,
      listService: newListService,
      paymentBill: {
        ...state.paymentBill,
        subTotal,
        tip,
      },
    };
  },
  [Types.UPDATE_SELECTED_CUSTOMER]: ({state, action}) => {
    return {
      ...state,
      selectedCustomer: action.payload,
    };
  },
  [Types.UPDATE_SELECTED_SERVICE]: ({state, action}) => {
    return {
      ...state,
      selectedService: action.payload,
    };
  },
  [Types.GET_TECHNICIAN]: ({state, action}) => {
    return {
      ...state,
      listTechnician: action.payload,
    };
  },
  [Types.GET_ALL_SERVICES]: ({state, action}) => {
    return {
      ...state,
      listTypeServices: action.payload,
    };
  },
  [Types.UPDATE_SELECTED_TECHNICIAN]: ({state, action}) => {
    return {
      ...state,
      selectedTechnician: action.payload,
    };
  },
  [Types.GET_CUSTOMER_WAITING]: ({state, action}) => {
    return {
      ...state,
      customerWaiting: action.payload,
    };
  },
  [Types.GET_CUSTOMER_INSERVICE]: ({state, action}) => {
    return {
      ...state,
      customerInservice: action.payload,
    };
  },
  [Types.GET_CUSTOMER_PAYMENT]: ({state, action}) => {
    return {
      ...state,
      customerPayment: action.payload,
    };
  },
  [Types.UNSELECTED_SERVICE]: ({state, action}) => {
    let tempArray = _.clone(state.listService);
    tempArray = tempArray.filter(e => e.id !== action.payload.id);
    let payment = _.clone(state.paymentBill);
    let tip = 0;
    let subTotal = 0;
    tempArray.map(e => {
      if (!isNaN(e.total)) {
        subTotal += parseFloat(e.total);
      }
      if (!isNaN(e.tip)) {
        tip += parseFloat(e.tip);
      }
    });
    if (!(subTotal === parseInt(subTotal))) {
      subTotal = subTotal.toFixed(2);
    }
    if (!(tip === parseInt(tip))) {
      tip = tip.toFixed(2);
    }
    payment.tip = tip;
    payment.subTotal = subTotal;
    return {
      ...state,
      listService: tempArray,
      paymentBill: payment,
    };
  },
  [Types.UPDATE_TIPS_TOTAL]: ({state, action}) => {
    let list = _.clone(state.listService);
    if (list.length > 0) {
      let tips = action.payload / list.length;
      list.map(e => {
        e.tip = tips;
      });
    }

    return {
      ...state,
      paymentBill: {
        ...state.paymentBill,
        tip: action.payload,
      },
      listService: list,
    };
  },
  [Types.RESET_PAYMENT_BILL]: ({state, action}) => {
    let defaultBill = {
      subTotal: 0,
      couponText: '',
      couponPrice: 0,
      giftCard: '',
      giftCardPrice: 0,
      tip: 0,
      discount: 0,
      total: 0,
    };
    return {
      ...state,
      paymentBill: defaultBill,
      listService: [],
      selectedCustomer: null,
    };
  },
  [Types.UPDATE_LIST_SERVICE_FROM_CUSTOMER]: ({state, action}) => {
    let tempArray = [];
    let payment = _.clone(state.paymentBill);
    let tip = 0;
    let subTotal = 0;
    tempArray = action.payload;
    tempArray.map(e => {
      if (!isNaN(e.total)) {
        subTotal += parseFloat(e.total);
      }
      if (!isNaN(e.tip)) {
        tip += parseFloat(e.tip);
      }
    });
    if (!(subTotal === parseInt(subTotal))) {
      subTotal = subTotal.toFixed(2);
    }
    if (!(tip === parseInt(tip))) {
      tip = tip.toFixed(2);
    }
    payment.tip = tip;
    payment.subTotal = subTotal;
    return {
      ...state,
      listService: tempArray,
      paymentBill: payment,
    };
  },
  [Types.CANCEL_SERVICE_CARD]: ({state, action}) => {
    let defaultBill = {
      subTotal: 0,
      couponText: '',
      couponPrice: 0,
      giftCard: '',
      giftCardPrice: 0,
      tip: 0,
      discount: 0,
      total: 0,
    };
    return {
      ...state,
      listService: [],
      paymentBill: defaultBill,
      selectedCustomer: null,
    };
  },

  [Types.EDIT_TECHNICIAN]: ({state, action}) => {
    const {serviceIndex, id, name} = action.payload;
    let cloneListService = _.clone(state.listService);
    cloneListService[serviceIndex].idTechnician = id;
    cloneListService[serviceIndex].name = name;
    return {
      ...state,
      listService: cloneListService,
    };
  },
  [Types.EDIT_SERVICES]: ({state, action}) => {
    const {serviceIndex, name, id, price} = action.payload;
    let cloneListService = _.clone(state.listService);
    cloneListService[serviceIndex].service = name;
    cloneListService[serviceIndex].serviceId = id.toString();
    cloneListService[serviceIndex].amount = price.toString();
    cloneListService[serviceIndex].total = price.toString();
    cloneListService[serviceIndex].quantity = '1';
    cloneListService[serviceIndex].tip = '';
    let payment = _.clone(state.paymentBill);
    let tip = 0;
    let subTotal = 0;
    cloneListService.map(e => {
      if (!isNaN(e.total)) {
        subTotal += parseFloat(e.total);
      }
      if (!isNaN(e.tip)) {
        tip += parseFloat(e.tip);
      }
    });
    if (!(subTotal === parseInt(subTotal))) {
      subTotal = subTotal.toFixed(2);
    }
    if (!(tip === parseInt(tip))) {
      tip = tip.toFixed(2);
    }
    payment.tip = tip;
    payment.subTotal = subTotal;
    return {
      ...state,
      listService: cloneListService,
      paymentBill: payment,
    };
  },
});

export default reducer;
