import {takeLatest, takeEvery} from 'redux-saga/effects';

import fetchHistoryWithDraw from './fetchHistoryWithDraw';
import {types} from '../../stores';

function* watchFetchWithDrawHistory() {
  yield takeLatest(types.test.FETCH_HISTORY_WITHDRAW, fetchHistoryWithDraw);
}
export default [
  watchFetchWithDrawHistory(),
];
