/**
 * @author: thai.nguyen 
 * @date: 2018-11-29 16:30:37 
 *  
 * 
 */
import { AsyncStorage as storage, } from 'react-native';
import { persistStore, } from 'redux-persist';

import { Logg, } from '../utils';

const blacklist = [
  'home',
  'auth',
  'trade',
  'other',
  'history',
  'market',
  'test'
  // Any sub-store that shouldn't be store between run time go here...
];

/**
 * This method take in the redux store and rehydrate it (READ: MODIFY)
 * The method return the promise, allow the the caller to wait until the process is complete
 */
const rehydrateStore = (store) => {
  if (!store) throw new Error('Can\'t start the redux without input store');

  return new Promise((resolve, reject) => {
    try {
      const callback = () => {
        Logg.info('Store rehydrated');
        resolve();
      };

      persistStore(
        store,
        {
          storage,
          blacklist,
        },
        callback
      );
    } catch (e) {
      Logg.error(e);
      reject(e);
    }
  });
};

export default rehydrateStore;
