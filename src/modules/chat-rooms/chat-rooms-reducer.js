import {
  ROOMS_REQUEST_GET,
  ROOMS_RECEIVE_GET_SUCCESS,
  ROOMS_RECEIVE_GET_FAILURE,
  ROOM_MESSAGES_REQUEST_GET,
  ROOM_MESSAGES_RECEIVE_GET_SUCCESS,
  ROOM_MESSAGES_RECEIVE_GET_FAILURE
} from './chat-rooms-action-types';
// ------------------------------------
// Initial State
// ------------------------------------
export const initialState = {
  rooms: [],
  isLoading: false
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = () => ({
  [ROOMS_REQUEST_GET]: (state) => ({
    ...state,
    isLoading: true
  }),
  [ROOMS_RECEIVE_GET_SUCCESS]: (state, action) => {
    if (typeof action.payload === 'object') {
      return {
        ...state,
        rooms: [
          ...state.rooms,
          ...action.payload
        ],
        isLoading: false
      }
    }
    return {
      ...state,
      isLoading: false
    }
  },
  [ROOMS_RECEIVE_GET_FAILURE]: (state) => ({
    ...state,
    isLoading: false
  }),
  [ROOM_MESSAGES_REQUEST_GET]: (state) => ({
    ...state,
    isLoading: true
  }),
  [ROOM_MESSAGES_RECEIVE_GET_SUCCESS]: (state, action) => {
    if (typeof action.payload === 'object') {
      const { data, roomKey } = action.payload;
      let room = state.rooms.find(({ id }) => id === parseInt(roomKey)) || {};
      room['messages'] = data;
      const newRooms = state.rooms
                         .filter(({ id }) => id !== parseInt(roomKey))
                         .sort(({ nameA }, { nameB }) => nameA.compareLocale(nameB));
      return {
        ...state,
        rooms: [
          ...newRooms,
          room
        ],
        isLoading: false
      }
    }
    return {
      ...state,
      isLoading: false
    }
  },
  [ROOM_MESSAGES_RECEIVE_GET_FAILURE]: (state) => ({
    ...state,
    isLoading: false
  }),
 });
// ------------------------------------
// Reducer
// ------------------------------------
export const chatRoomsReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS()[action.type];
  return handler ? handler(state, action) : state;
};
export default chatRoomsReducer;