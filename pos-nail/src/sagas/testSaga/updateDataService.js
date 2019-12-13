// call put select
import {call, put, select} from 'redux-saga/effects';
import {selectors, actions} from '../../stores';
import {delay} from 'redux-saga';

export default function* updateDataService(action) {
  const {payload} = action;
  debugger;
  yield put(actions.test.updateDataService(payload));
}
