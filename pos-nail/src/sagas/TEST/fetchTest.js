import {call, put, select} from 'redux-saga/effects';
import {selectors, actions} from '../../stores';
import {Logg} from '../../utils';

const logg = Logg.create('test saga');

export default function* fetchData(action) {
  // logg.info(action);
  const {payload} = action;
  yield put(actions.test.testAction(payload));
}
