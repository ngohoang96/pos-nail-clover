import {put, call} from 'redux-saga/effects';
import {actions} from '../../stores';
import {FiFetch, Logg} from '../../utils';

export default function* fetchHistoryWithDraw() {
  try {
    yield put(actions.test.updateIsLoadingHistoryWithDraw(true));
    const data = yield call(FiFetch.CallApi, {
      api: 'user/withdrawals/list',
      method: FiFetch.Methods.POST,
      body: {
        status: 'None',
        currency: 'BTC',
        fromDate: 0,
        toDate: 0,
        search: '',
        skip: 0,
        take: 10,
      },
    });
    yield put(actions.test.updateHistoryWithDraw(data));
  } catch (e) {
    Logg.error(e);
  } finally {
    yield put(actions.test.updateIsLoadingHistoryWithDraw(false));
  }
}
