/**
 * @author: thai.nguyen 
 * @date: 2018-11-29 17:19:33 
 *  
 * 
 */
const createTransitionState = () => {
  let _isTransiting = false;

  return {
    isTransiting: () => _isTransiting,
    start: () => {
      _isTransiting = true;
    },
    stop: () => {
      _isTransiting = false;
    },
  };
};

export default createTransitionState();