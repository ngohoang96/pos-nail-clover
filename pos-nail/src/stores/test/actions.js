/**
 * @author: thai.nguyen 
 * @date: 2018-11-29 16:34:07 
 *  
 * 
 */
const Types = {
  // worker
  TEST: 'test@TEST',
};

const Actions = {
  //worker
  testAction: (data) => ({ 
    type: Types.TEST, 
    payload: data,
  }),
};

export { Types, Actions };