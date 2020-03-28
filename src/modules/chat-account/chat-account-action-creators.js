import {
  CHAT_ACCOUNT_USERNAME_UPDATE
} from './chat-account-action-types';

// ------------------------------------
// Actions
// ------------------------------------

export const chatAccountUsernameUpdate = (payload = {}) => ({
  type: CHAT_ACCOUNT_USERNAME_UPDATE,
  payload
});