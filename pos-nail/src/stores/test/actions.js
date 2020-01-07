const Types = {
  UPDATE_DATA_SERVICE: 'UPDATE_DATA_SERVICE@TEST',
  DELETE_DATASERVICE: 'test@DELETE_DATASERVICE',
  FETCH_DATA: 'home@FETCH_DATA',
  GET_GAINER_DATA: 'home@GET_GAINER_DATA',
  GET_GAINER_DATA_SUCCESS: 'home@GET_GAINER_DATA_SUCCESS',
  FETCH_DATA_FUNDS: 'funds@FET_DATA_FUNDS',
  UPDATE_DATA_FUNDS: 'funds@UPDATE_DATA_FUNDS',

  UPDATE_HISTORY_WITHDRAW: 'history@UPDATE_HISTORY_WITHDRAW',
  FETCH_HISTORY_WITHDRAW: 'history@FETCH_HISTORY_WITHDRAW',
  UPDATE_ISLOADING_HISTORY: 'history@UPDATE_ISLOADING_HISTORY',

  UPDATE_DATA_TECHNICIAN: 'test@UPDATE_DATA_TECHNICIAN',

  UPDATE_LIST_FINISH: 'test@UPDATE_LIST_FINISH',
  GET_LIST_SELECT_SERVICE: 'test@GET_LIST_SELECT_SERVICE',
  UPDATE_LIST_TECHNICIAN: 'test@UPDATE_LIST_TECHNICIAN',
  GET_LIST_TECHNICIAN: 'test@GET_LIST_TECHNICIAN',
  UPDATE_DATA_PERFER_SERVICE: 'test@UPDATE_DATA_PERFER_SERVICE',

  //update isSuccessded item list fullmenu
  UPDATE_ITEM_LIST_CUSTOMER_SERVICE: 'test@UPDATE_ITEM_LIST_CUSTOMER_SERVICE',
  //UPdate input  tech clock in / clock out
  UPDATE_INPUT_NAILS_TECH_CLOCK_IN: 'test@UPDATE_INPUT_NAILS_TECH_CLOCK_IN',

  //assign data services full menu
  ASSIGN_LIST_FULLMENU: 'test@ASSIGN_LIST_FULLMENU',
  //update data services full menu
  UPDATE_LIST_FULLMENU: 'test@UPDATE_LIST_FULLMENU',
  //update isSuccessded item list fullmenu
  UPDATE_ITEM_LIST_FULLMENU: 'test@UPDATE_ITEM_LIST_FULLMENU'
};

const Actions = {
  //worker
  updateDataService: data => ({
    type: Types.UPDATE_DATA_SERVICE,
    payload: data,
  }),
  dDataService: id => ({
    type: Types.DELETE_DATASERVICE,
    id: id,
  }),
  updateGainer: data => ({
    type: Types.GET_GAINER_DATA_SUCCESS,
    payload: data,
  }),
  updateIsLoadingHistoryWithDraw: isLoadingHistoryWithdraw => ({
    type: Types.UPDATE_ISLOADING_HISTORY,
    payload: isLoadingHistoryWithdraw,
  }),
  //gán data technician
  updateListFinish: data => ({
    type: Types.UPDATE_LIST_FINISH,
    payload: data,
  }),

  // gán data vừa được update vào redux
  updateListTechnician: data => ({
    type: Types.UPDATE_LIST_TECHNICIAN,
    payload: data,
  }),
  //gán data services
  getListSelectService: data => ({ type: Types.GET_LIST_SELECT_SERVICE, payload: data }),

  updateDataPerferService: catname => ({ type: Types.UPDATE_DATA_PERFER_SERVICE, payload: catname }),


  //UPdate input  tech clock in / clock out
  // UPDATE_INPUT_NAILS_TECH_CLOCK_IN: 'test@UPDATE_INPUT_NAILS_TECH_CLOCK_IN'
  updateInputNailsTechClockIn: c => ({
    type: Types.UPDATE_INPUT_NAILS_TECH_CLOCK_IN,
    payload: c
  }),

  //assign data services full menu
  assignlistFullMenu: data => ({ type: Types.ASSIGN_LIST_FULLMENU, payload: data }),
  //update data services full menu
  updateListFullMenu: catname => ({ type: Types.UPDATE_LIST_FULLMENU, payload: catname }),

  //update isSuccessded item list fullmenu  
  updateIsSuccessdedItemListFullMenu: (item) => ({ type: Types.UPDATE_ITEM_LIST_FULLMENU, payload: item }),

  //update isSuccessded item list fullmenu  
  updateIsSuccessdedItemListCustomerService: (item) => ({ type: Types.UPDATE_ITEM_LIST_CUSTOMER_SERVICE, payload: item })
};

export { Types, Actions };
