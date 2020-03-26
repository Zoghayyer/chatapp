import {
  createBrowserHistory as createHistory
} from 'history';
/*
  The purpose of this library is to create one universal history object.
  This allows the non-history aware files (e.g., modules) to import the same, synced history object and
  invoke the various methods to change the history stack.
 */
export default createHistory();