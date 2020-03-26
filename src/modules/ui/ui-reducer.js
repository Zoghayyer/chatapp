import {
  UI_CHAT_ROOMS_ROOM_KEY_UPDATE
} from './ui-action-types';
// ------------------------------------
// Initial State
// ------------------------------------
export const initialState = {
  chatRooms: {
    roomKey: ''
  }
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = () => ({
  [UI_CHAT_ROOMS_ROOM_KEY_UPDATE]: (state, { payload }) => ({
    ...state,
    chatRooms: {
      ...state.chatRooms,
      roomKey: payload
    }
  })
 });
// ------------------------------------
// Reducer
// ------------------------------------
export const uiReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS()[action.type];
  return handler ? handler(state, action) : state;
};
export default uiReducer;