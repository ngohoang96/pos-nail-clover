/**
 *  Wrapper for Fetch API (https://developer.mozilla.org/en/docs/Web/API/Fetch_API)
 *  Inspired by Angular 1's $http service.
 *  Support setup default headers and interceptors.
 *  Future note: Consider using service worker instead of this for more standard solution.
 *  Usage (see each method below for more details):
 *      fetchHelperInstance.fetch( *the same parameters as Fetch API* )
 *      .then(resolve, reject)
 */
import { DeviceEventEmitter, } from 'react-native';
import Logg from './Logg';
import { AppConst, } from '../const';
const logg = Logg.create('Fetch helper');
class FetchHelper {
  FORM_URL_ENCODED = 'application/x-www-form-urlencoded';

  constructor() {
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
    this.beforeRequestInterceptors = [];
    this.afterResponseInterceptors = [];
  }

  // addEvent = (event)=>{
  //   this.event = event;
  // }

  /**
   *  Add default header to each Fetch request.
   */
  addDefaultHeader(key, value) {
    this.defaultHeaders[key] = value;
  }
  /**
   *  Remove default header
   */
  removeDefaultHeader(key) {
    delete this.defaultHeaders[key];
  }
  /**
   *  To define something to do before every fetch request.
   *  Params:
   *      TBD
   *  Result:
   *      Returns a function to remove added interceptor.
   *  Future note: Consider using Service Worker
   */
  addBeforeRequestInterceptor(interceptor) {
    this.beforeRequestInterceptors.push(interceptor);
    return () => {
      const index = this.beforeRequestInterceptors.indexOf(interceptor);
      this.beforeRequestInterceptors.splice(index, 1);
    };
  }
  /**
   *  To define something to do after every fetch response.
   *  If one of interceptors returns false, the process will be stop immediately.
   *  Params:
   *      interceptor: function (response)
   *  Result:
   *      Returns a function to remove added interceptor.
   *  Future note: Consider using Service Worker
   */
  addAfterResonseInterceptor(interceptor) {
    this.afterResponseInterceptors.push(interceptor);
    return () => {
      const index = this.afterResponseInterceptors.indexOf(interceptor);
      this.afterResponseInterceptors.splice(index, 1);
    };
  }
  jsonToForm(json = {}) {
    return Object.keys(json)
      .map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
      })
      .join('&');
  }

  /**
   *  Wrapper for fetch() API. Inspired by Angular's $http service.
   *  Usage:
   *      FetchHelper.fetch('api/something/somewhere', configs) //same parameters as Fetch API
   *      .then(([data, status]) => {
   *          //Handle when response status is in range [200, 300)
   *          //Params:
   *          //  data: json object
   *          //  status: 2XX
   *      }, ([data, status]) => {
   *          //Handle when response status is not in rage [200, 300)
   *          //Params:
   *          //  data: json object
   *          //  status: XXX or -1 if parse JSON fail from server response
   *      })
   */
  fetch = async (input, init = {}) => {
    let initWithDefaultHeaders = {
      ...init,
      headers: mergeWithDefaultHeaders(init.headers, this.defaultHeaders),
    };
    let beforeRequestInterceptorsResult = applyBeforeRequestInterceptors(
      this.beforeRequestInterceptors
    );
    if (beforeRequestInterceptorsResult === false) {
      throw new Error('Fetch Promise was canceled by interceptor before requested');
    }
    let response;
    try {
      response = await fetch.apply(null, [input, initWithDefaultHeaders,]);
    } catch (e) {
      logg.error(e);
      applyAfterResponseInterceptors(e, this.afterResponseInterceptors);
      return [e, -1,];
    }

    const responseStatus = response.status;
    let jsonData = null;
    try {
      jsonData = await response.json();
      let afterResponseInterceptorsResult = applyAfterResponseInterceptors(
        response,
        this.afterResponseInterceptors,
        jsonData
      );
      if (afterResponseInterceptorsResult === false) {
        throw new Error('Fetch Promise was canceled by interceptor after responded');
      }
      if (responseStatus === 401) {
        DeviceEventEmitter.emit(AppConst.AppEvents.tokenInvalid, {});
      }
      return [jsonData, responseStatus,];
    } catch (e) {
      if (!jsonData) {
        let afterResponseInterceptorsResult = applyAfterResponseInterceptors(
          response,
          this.afterResponseInterceptors,
          jsonData
        );
        if (afterResponseInterceptorsResult === false) {
          throw new Error('Fetch Promise was canceled by interceptor after responded');
        }
      }
      logg.info(
        `Can not parse json from response of API "${input}" with code ${responseStatus}.`,
        e
      );
      if (responseStatus === 401) {
        DeviceEventEmitter.emit(AppConst.AppEvents.tokenInvalid, {});
      }
      return [response, responseStatus,];
    }
  };
  uploadFile(url, opts = {}, onProgress) {
    return new Promise((res, rej) => {
      var xhr = new XMLHttpRequest();
      xhr.open(opts.method || 'post', url);
      const headers = mergeWithDefaultHeaders(opts.headers, this.defaultHeaders);
      for (var k in headers) {
        xhr.setRequestHeader(k, headers[k]);
      }
      xhr.onload = (e) => {
        try {
          const json = JSON.parse(e.target.responseText);
          res([json, xhr.status,]);
        } catch (err) {
          res([e.target.responseText, xhr.status,]);
        }
      };
      xhr.onerror = rej;
      if (xhr.upload && onProgress) {
        xhr.upload.onprogress = onProgress;
      } // event.loaded / event.total * 100 ; //event.lengthComputable
      xhr.send(opts.body);
    });
  }
  getHeader() {
    return this.defaultHeaders;
  }
}

/*** PRIVATE METHODS: ***/

function mergeWithDefaultHeaders(headers = {}, defaultHeaders) {
  var headerObj = {};
  if (headers instanceof Headers) {
    for (let [key, value,] of headers) {
      headerObj[key] = value;
    }
  } else {
    headerObj = headers;
  }
  return Object.assign({}, defaultHeaders, headers);
}

function applyBeforeRequestInterceptors(interceptors) {
  for (let interceptor of interceptors) {
    try {
      const interceptorResult = interceptor();
      if (interceptorResult === false) {
        logg.error(
          'Interceptor ',
          interceptor,
          ' has cancel signal. This makes the request stop immediately.'
        );
        return false;
      }
    } catch (e) {
      logg.error(`[FetchHelper] Error from interceptor ${interceptor}`, e);
      return false;
    }
  }
  //interceptors.forEach(interceptor => interceptor())
}

function applyAfterResponseInterceptors(response, interceptors, jsonData) {
  for (let interceptor of interceptors) {
    try {
      const interceptorResult = interceptor(response, jsonData);
      if (interceptorResult === false) {
        logg.error(
          'Interceptor ',
          interceptor,
          ' has cancel signal. This makes the request stop immediately.'
        );
        return false;
      }
    } catch (e) {
      logg.error(`[FetchHelper] Error from interceptor ${interceptor}`, e);
      return false;
    }
  }
}

const fetchHelperInstance = new FetchHelper();

export default fetchHelperInstance;
