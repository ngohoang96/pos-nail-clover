/**
 * @author: thai.nguyen 
 * @date: 2018-11-29 16:31:42 
 *  
 * 
 */
/* eslint-disable no-undef*/

// Remove yellow box warning caused by SignalR timer
window.console.ignoredYellowBox = ['Setting a timer',];

// Read more at:
// https://docs.bugsnag.com/platforms/react-native/customizing-error-reports/#adding-detailed-breadcrumbs
const InfoTypes = {
  error: 'error',
  log: 'log',
  navigation: 'navigation',
  process: 'process',
  request: 'request',
  state: 'state',
  user: 'user',
  manual: 'manual',
};

const InfoMetadata = {
  type: 'error' | 'log' | 'navigation' | 'process' | 'request' | 'state' | 'user' | 'manual',
  at: String,
};

const Severity = 'info' | 'warning' | 'error';

/**
 * Log an info trace for debug purpose.
 * The msg string should be short (max 30 chars)
 * The metadata object contain additional info like the function scope or context
 *
 * @param {String} msg
 * @param {Object} [metadata={}]
 */
function info(msg: String, metadata: InfoMetadata = {}) {
  if (__DEV__) {
    window.console.log('INFO:', msg, JSON.stringify(metadata));
  }
}
/**
 * Take an metadata object and return a info function
 * Everytime the info function get call, the metadata object will be use (or merge) as second params
 *
 * @param {Object} [_metadata={}]
 * @returns
 */
function preloadInfo(_metadata: InfoMetadata = {}) {
  return (msg: String, metadata: InfoMetadata = {}) => info(msg, { ..._metadata, ...metadata, });
}

/**
 * Warn an error for debug purpose.
 * The metadata object contain additional info like the function scope or context
 * The severity should be use correctly, as it will be use to count on the dashboard
 *
 * @param {*} error
 * @param {Object} [metadata={}]
 * @param {Severity} [severity='warning']
 */
function handleError(error, metadata: Object = {}, severity: Severity = 'warning') {
  if (__DEV__) {
    const _msg =
      error instanceof Error ? error.message : typeof error === 'string' ? error : 'Unknown error';
    window.console.warn('ERROR:', _msg, JSON.stringify(metadata));
  }
}

function preloadError(_metadata: Object = {}) {
  return (error, metadata: Object = {}, severity: Severity) =>
    handleError(error, { ..._metadata, ...metadata, }, severity);
}
const create = (name) => ({
  info: (...params) => info(`${name}:`, ...params),
  error: (...params) => error(`${name}:`, ...params),
});
export default {
  InfoTypes,
  info,
  preloadInfo,
  error: handleError,
  preloadError,
  create,
};
