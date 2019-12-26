import {call, put} from 'redux-saga/effects';
import {actions} from '../../stores';
import {FiFetch, Logg} from '../../utils';
export default function* fetchGainer() {
  try {
    const data = yield call(FiFetch.CallApi, {
      api: 'ano/top-performances',
    });
    yield put(actions.test.updateGainer(data));
  } catch (e) {
    Logg.error('gainer err', e);
  } finally {
  }
}
