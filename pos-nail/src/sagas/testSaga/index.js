import {takeLatest} from 'redux-saga/effects';

import updateDataService from './updateDataService';

import {types} from '../../stores';

function* watchFetchDataService() {
  yield takeLatest(types.test.UPDATE_DATA_SERVICE, updateDataService);
}
export default [watchFetchDataService()];
