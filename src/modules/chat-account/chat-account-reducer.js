import {
  CHAT_ACCOUNT_USERNAME_UPDATE
} from './chat-account-action-types';
// ------------------------------------
// Initial State
// ------------------------------------
export const initialState = {
  username: ''
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = () => ({
  [CHAT_ACCOUNT_USERNAME_UPDATE]: (state, { payload }) => ({
    ...state,
    username: payload.username
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