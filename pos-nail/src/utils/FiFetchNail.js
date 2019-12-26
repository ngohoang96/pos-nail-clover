import {AppValue} from '../values';
import Logg from './Logg';
let accessToken = '';
export const Method = {
  POST: 'POST',
  GET: 'GET',
};
export const setToken = token => {
  accessToken = token.tokenType + ' ' + token.accessToken;
};
export const CallApi = ({api, method = 'GET', body}) => {
  return new Promise((resolve, reject) => {
    try {
      if (!api) {
        throw new Error('Missing endpoint.');
      }
      fetch(`${AppValue.API_URL}${api}`, {
        method,
        ...(method === Method.POST
          ? {
              body: JSON.stringify(body),
            }
          : {}),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${accessToken}`,
        },
      }).then(res => {
        const {Status} = res;
        res
          .json()
          .then(data => {
            if (data) {
              const {errorMessage, errorCode} = data;
              if (errorCode) {
                reject({message: `${errorMessage}(code:${errorCode})`});
                return;
              }
            }
            resolve(data);
          })
          .catch(() => {
            if (Status === 200) {
              resolve();
              return;
            }
            reject({message: 'Remote server fail with status ' + Status});
          });
      });
    } catch ({message = 'Unknow Error'}) {
      reject({message});
    }
  });
};
