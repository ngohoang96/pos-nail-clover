import {takeLatest, takeEvery} from 'redux-saga/effects';

import fetchGainer from './fetchGainer';
import fetchHistoryWithDraw from './fetchHistoryWithDraw';
import {types} from '../../stores';

function* watchFetchGainer() {
  yield takeLatest(types.test.GET_GAINER_DATA, fetchGainer);
}
function* watchFetchWithDrawHistory() {
  yield takeLatest(types.test.FETCH_HISTORY_WITHDRAW, fetchHistoryWithDraw);
}
export default [watchFetchGainer(), watchFetchWithDrawHistory()];
