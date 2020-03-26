import { combineReducers } from 'redux';
import { chatAccountReducer } from '../modules/chat-account';
import { chatRoomsReducer } from '../modules/chat-rooms';
import { uiReducer } from '../modules/ui';

export const makeRootReducerFactory = ({ combineReducers, ...reducers }) => (asyncReducers) => combineReducers({
  // Add sync reducers here
  ...reducers,
  ...asyncReducers
});

export const makeRootReducer = makeRootReducerFactory({
  combineReducers,
  chatAccount: chatAccountReducer,
  chatRooms: chatRoomsReducer,
  ui: uiReducer
});

export default makeRootReducer;