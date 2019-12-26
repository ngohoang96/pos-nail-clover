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
  UPDATE_LIST_SELECT_SERVICE: 'test@UPDATE_LIST_SELECT_SERVICE',
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
  fetchGainer: data => ({
    type: Types.GET_GAINER_DATA,
    payload: data,
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

  //gán data services
  updateListSelectService: data => ({
    type: Types.UPDATE_LIST_SELECT_SERVICE,
    payload: data,
  }),
  // updateDataTechnician: id => ({
  //   type: Types.UPDATE_DATA_TECHNICIAN,
  //   payload: id,
  // }),
};

export {Types, Actions};
