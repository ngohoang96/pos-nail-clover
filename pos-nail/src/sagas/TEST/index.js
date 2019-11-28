/**
 * @author: thai.nguyen 
 * @date: 2018-11-29 16:47:27 
 *  
 * 
 */
import {
  takeLatest,
} from 'redux-saga/effects';

import { types, } from '../../stores';
import fetchTest from './fetchTest';

function * watchTestFunction(){
  yield takeLatest(types.test.TEST, fetchTest);
}
export default [watchTestFunction(), ];