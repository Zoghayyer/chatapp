import {
  CHAT_ACCOUNT_USERNAME_UPDATE
} from './chat-account-action-types';
import Session from '../../lib/session';

const user = JSON.parse(Session.getItem('user')) || {};

// ------------------------------------
// Initial State
// ------------------------------------
export const initialState = {
  username: user.username || '',
  id: user.id || '',
  loginTime: user.loginTime || 0
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = () => ({
  [CHAT_ACCOUNT_USERNAME_UPDATE]: (state, { payload }) => ({
    ...state,
    username: payload.username,
    id: payload.id,
    loginTime: payload.loginTime
  })
 });

// ------------------------------------
// Reducer
// ------------------------------------
export const chatAccountReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS()[action.type];
  return handler ? handler(state, action) : state;
};
export default chatAccountReducer;