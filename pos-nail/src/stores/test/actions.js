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
  getListSelectService: data => ({
    type: Types.GET_LIST_SELECT_SERVICE,
    payload: data,
  }),

  updateDataPerferService: data => ({
    type: Types.UPDATE_DATA_PERFER_SERVICE,
    payload: data,
  }),
};

export {Types, Actions};
