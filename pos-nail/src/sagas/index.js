/**
 * @author: thai.nguyen
 * @date: 2018-11-29 16:46:18
 *
 *
 */
import {all} from 'redux-saga/effects';

import testSagas from './TEST/index';

// More sagas go here...

export default function*() {
  yield all([
    ...testSagas,
    // More sagas destructuring here
  ]);
}
