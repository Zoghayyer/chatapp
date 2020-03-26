import {
  UI_CHAT_ROOMS_ROOM_KEY_UPDATE
} from './ui-action-types';

// ------------------------------------
// Actions
// ------------------------------------

export const uiChatRoomsRoomKeyUpdate = (payload = {}) => ({
  type: UI_CHAT_ROOMS_ROOM_KEY_UPDATE,
  payload
});