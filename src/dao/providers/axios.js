import axios from 'axios';
import environmentConfig from '../../static/config/config';
// ------------------------------------
// Environment api base urls
// ------------------------------------
const baseUrls = environmentConfig.api;

// ------------------------------------
// Provider API
// ------------------------------------
/**
 * Create a baseline axios instance for use with the ChatApp. A baseline axios instance:
 *   - adds appropriate JSON-related headers to all requests
 *   - turns on CORS
 *
 *   @param {string} baseURL: the base URL to use for this axios instance
 *   @returns {axios.AxiosInstance}
 */
export const createBaselineInstance = (baseURL) => {
  const axiosInstance = axios.create({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    timeout: 66000,
    baseURL
  });

  return axiosInstance;
};



/**
 * A second axios instance which, after app bootstrapping, does NOT include the fallback /error (robot) page handler that the fallbackClient has.
 *
 * @type {axios.AxiosInstance}
 */
export const chatClient = createBaselineInstance(baseUrls.chatAppServer.url);