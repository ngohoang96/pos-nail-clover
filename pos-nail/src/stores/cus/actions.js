const Types = {
  ASSIGN_LIST_SERVICE: 'cus@ASSIGN_LIST_SERVICE',
  UPDATE_CATNAME_SERIVICE: 'cus@UPDATE_CATNAME_SERIVICE',
  UPDATE_ISSUCCESS_ITEM_SERVICE: 'cus@UPDATE_ISSUCCESS_ITEM_SERVICE',
  UPDATE_SELECTED_TECHNICIAN: 'cus@UPDATE_SELECTED_TECHNICIAN',
  UPDATE_SELECTED_SERVICES: 'cus@UPDATE_SELECTED_SERVICES',
  GET_LIST_TECHNICIAN_WORKING: 'cus@GET_LIST_TECHNICIAN_WORKING',
  UPDATE_SELECTED_TYPE_SERVICE: 'cus@UPDATE_SELECTED_TYPE_SERVICE',
};
const Actions = {
  //gọi tới gán dữ liệu ban đầu cho list service modal customer
  assignListService: data => ({type: Types.ASSIGN_LIST_SERVICE, payload: data}),
  // cập nhật lại catname để filter ra list service hiển thị ở customer sign in
  updateCatnameService: newCatName => ({
    type: Types.UPDATE_CATNAME_SERIVICE,
    payload: newCatName,
  }),
  //cập nhật lại isSuccess của item list service , truyền vào item để lọc
  updateIssuccessItemService: item => ({
    type: Types.UPDATE_ISSUCCESS_ITEM_SERVICE,
    payload: item,
  }),

  updateSelectedTechnician: data => ({
    type: Types.UPDATE_SELECTED_TECHNICIAN,
    payload: data,
  }),

  updateSelectedServices: data => ({
    type: Types.UPDATE_SELECTED_SERVICES,
    payload: data,
  }),
  getTechnicianWorking: data => ({
    type: Types.GET_LIST_TECHNICIAN_WORKING,
    payload: data,
  }),

  updateSelectedTypeServices: data => ({
    type: Types.UPDATE_SELECTED_TYPE_SERVICE,
    payload: data,
  }),
};
export {Types, Actions};
