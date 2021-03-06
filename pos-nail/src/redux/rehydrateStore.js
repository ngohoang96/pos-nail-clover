import storage from '@react-native-community/async-storage';
import {persistStore} from 'redux-persist';

import {Logg} from '../utils';

const blacklist = [
  'cus',
  'home',
  // Any sub-store that shouldn't be store between run time go here...
];

/**
 * This method take in the redux store and rehydrate it (READ: MODIFY)
 * The method return the promise, allow the the caller to wait until the process is complete
 */
const rehydrateStore = store => {
  if (!store) throw new Error("Can't start the redux without input store");

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
        callback,
      );
    } catch (e) {
      Logg.error(e);
      reject(e);
    }
  });
};

export default rehydrateStore;
