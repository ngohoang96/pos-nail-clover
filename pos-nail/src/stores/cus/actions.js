const Types = {
  ASSIGN_LIST_SERVICE: 'cus@ASSIGN_LIST_SERVICE',
  UPDATE_CATNAME_SERIVICE: 'cus@UPDATE_CATNAME_SERIVICE',
  UPDATE_ISSUCCESS_ITEM_SERVICE: 'cus@UPDATE_ISSUCCESS_ITEM_SERVICE',
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

  // updateNailTechDropZone :
};
export {Types, Actions};
