/**
 * @author: thai.nguyen 
 * @date: 2018-06-25 11:29:58 
 *
 *  
 */

/* eslint-disable no-undef*/

// Remove yellow box warning caused by SignalR timer
window.console.ignoredYellowBox = ['Setting a timer',];

/**
 * Use to print information log data, useful for debug purpose
 * @param {any} params
 */
const info = (...params) => {
  // We only log on dev mode
  if (__DEV__) {
    window.console.log('INFO LOG', ...params);
  }
};

/**
 * Use to display error data that require attention in development process
 * Will send error data back to crash report service in production mode
 * @param {any} params
 */
const error = (...params) => {
  if (__DEV__) {
    window.console.warn('ERROR LOG', ...params);
  } else {
    // TODO: send error data to crash report serivce
  }
};

/**
 * Create a logger instance with name that will be use as log prefix
 * @param {any} name
 */
const create = (name) => ({
  info: (...params) => info(`${name}:`, ...params),
  error: (...params) => error(`${name}:`, ...params),
});

const Logg = {
  create,
  info,
  error,
};

export default Logg;
