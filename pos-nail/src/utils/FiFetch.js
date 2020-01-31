/**
 * @author: thai.nguyen
 * @date: 2018-12-12 22:17:25
 *
 *
 */
import { API_URL, } from '../values/AppValue';
import { store, } from '../redux';
import { actions, } from '../stores';
import Moment from 'moment';
import Logg from './Logg';
import {  put, } from 'redux-saga/effects';
let accessToken = '';
export const Methods = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
};

export const setToken = (token) => {
  accessToken = 'bearer' + ' ' + token.accessToken;
};
export function getParsedDate(date) {
  //2016-01-04T10:34:23+01:00 => mmyydd
  try {
    return Moment(date).format('MM-DD-YYYY HH:MM:SS');
  } catch (error) {
    return date;
  }
}

export function getAPILL(api, method = 'GET', body) {
  Logg.info(api + ' xxx body' + JSON.stringify(body));
  // eslint-disable-next-line func-names
  return new Promise(function(resolve, reject) {
    try {
      fetch('https://optionx-api.kryptoniex.com/' + api, {
        method,
        ...(body
          ? {
            body: JSON.stringify(body),
          }
          : {}),
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken,
        },
      })
        .then((response) => {
          const { status, } = response;
          response
            .json()
            .then((data) => {
              let res = {
                data: data,
                error: false,
              };
              resolve(res);
            })
            .catch(() => {
              if (status === 200) {
                resolve();
                return;
              }
              reject({ message: 'Remote server fail with status ' + status, });
            });
        })
        .catch((err) => {
          console.log('There is an error occurred while requesting api', err, api)
    
        });
    } catch (error) {
      let res = {
        data: error,
        error: false,
      };
      reject(res);
    }
  });
}

export const CallApi = ({ api, method = 'GET', body, fullapi, }) => {
  Logg.info('api xxx: ' + api + ' xxx body' + body + 'token' + accessToken);
  return new Promise((resolve, reject) => {
    try {
      if (!api) {
        throw new Error('Missing endpoint.');
      }
      fetch(fullapi ? `${fullapi}` : `${API_URL}${api}`, {
        method,
        ...(body
          ?{
            body: JSON.stringify(body),
          } 
          : {}),
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken,
        },
      }).then((res) => {
        const { status, } = res;
        Logg.info('status xxx', status);
        if (status === 401 || status === 403) {
          // alert('2222');
          Logg.info('lõi fetch api 401 ' + `${api}`);
          //set cái này là no logout
          store.dispatch(actions.account.setUserData(null));
        }
        res
          .json()
          .then((data) => {
            //console.log('xxxx11111'+ JSON.stringify(data) );
            if (data) {
              const { errorMessage, errorCode, } = data;
              if (errorCode) {
                reject(new Error(`${errorMessage}`));
                return;
              }
            }
            resolve(data);
          })
          .catch(() => {
            if (status === 200) {
              resolve();
              return;
            }
            reject({ message: 'Remote server fail with status ' + status, });
          });
      });
    } catch (error) {
      // console.log(error);
      reject(error);
    }
  });
};
