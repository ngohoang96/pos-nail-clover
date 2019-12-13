/**
 * @author: thai.nguyen
 * @date: 2018-06-25 11:54:59
 */
import {all} from 'redux-saga/effects';

// More sagas go here...
import testSagas from './testSaga'

export default function*() {
  yield all([
    ...testSagas,
    // More sagas destructuring here
  ]);
}
