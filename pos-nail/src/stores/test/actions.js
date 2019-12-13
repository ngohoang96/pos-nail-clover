const Types = {
  UPDATE_DATA_SERVICE: 'UPDATE_DATA_SERVICE@TEST',
};

const Actions = {
  //worker
  updateDataService: data => ({
    type: Types.UPDATE_DATA_SERVICE,
    payload: data,
  }),
};

export {Types, Actions};
