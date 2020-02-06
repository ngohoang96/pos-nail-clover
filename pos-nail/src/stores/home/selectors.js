export const getDataService = state => state.home.dataService;
export const addSuccess = state => state.home.addSuccess;
export const getHistoryWithDraw = state => state.home.historyWithdraw;
export const getIsLoadingHistoryWithDraw = state =>
  state.home.isLoadingHistoryWithdraw;
export const getDataTechnician = state => state.home.DataTechnician;
export const getlistDataServices = state => state.home.listDataServices;
export const getdataSelectedPerferService = state =>
  state.home.dataSelectedPerferService;
export const inputNailsTechClockIN = state => state.home.inputNailsTechClockIN;
export const listServicesFullMenu = state => state.home.listServicesFullMenu;
export const catnameFullMenu = state => state.home.catnameFullMenu;
export const catnameCustomerServices = state =>
  state.home.catnameCustomerServices;
export const selectListTechnicianSelected = state =>
  state.home.listTechnicianSelected;
export const selectListServices = state => state.home.listService;
export const selectListServicesItem = (state, index) => {
  return state.home.listService[index];
};
