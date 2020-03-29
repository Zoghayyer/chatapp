import {
  ROOMS_REQUEST_GET,
  ROOMS_RECEIVE_GET_SUCCESS,
  ROOMS_RECEIVE_GET_FAILURE,
  ROOM_MESSAGES_REQUEST_GET,
  ROOM_MESSAGES_RECEIVE_GET_SUCCESS,
  ROOM_MESSAGES_RECEIVE_GET_FAILURE,
  ROOM_MESSAGES_REQUEST_POST,
  ROOM_MESSAGES_RECEIVE_POST_SUCCESS,
  ROOM_MESSAGES_RECEIVE_POST_FAILURE,
  ROOM_DETAILS_REQUEST_GET,
  ROOM_DETAILS_RECEIVE_GET_SUCCESS,
  ROOM_DETAILS_RECEIVE_GET_FAILURE,
  ROOMS_STALE
} from './chat-rooms-action-types';
// ------------------------------------
// Initial State
// ------------------------------------
export const initialState = {
  rooms: [],
  stale: true,
  roomDetailsRequestGetIsLoading: false,
  roomMessagesRequestGetIsLoading: false,
  roomMessagesRequestPostIsLoading: false,
  roomsRequestGetIsLoading: false,
  isLoading: false
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = () => ({
  [ROOMS_REQUEST_GET]: (state) => ({
    ...state,
    roomsRequestGetIsLoading: true,
    isLoading: true
  }),
  [ROOMS_RECEIVE_GET_SUCCESS]: (state, action) => {
    if (typeof action.payload === 'object') {
      return {
        ...state,
        rooms: [
          ...action.payload
        ],
        roomsRequestGetIsLoading: false,
        isLoading: false
      }
    }
    return {
      ...state,
      roomsRequestGetIsLoading: false,
      isLoading: false
    }
  },
  [ROOMS_RECEIVE_GET_FAILURE]: (state) => ({
    ...state,
    roomsRequestGetIsLoading: false,
    isLoading: false
  }),
  [ROOM_MESSAGES_REQUEST_GET]: (state) => ({
    ...state,
    roomMessagesRequestGetIsLoading: true,
    isLoading: true
  }),
  [ROOM_MESSAGES_RECEIVE_GET_SUCCESS]: (state, action) => {
    if (typeof action.payload === 'object') {
      const { data, roomKey } = action.payload;
      const rooms = state.rooms.map((room) => {
        if (room.id === parseInt(roomKey)) {
          room['messages'] = data;
        }
        return room;
      });

      return {
        ...state,
        rooms,
        roomMessagesRequestGetIsLoading: false,
        isLoading: false
      }
    }
    return {
      ...state,
      roomMessagesRequestGetIsLoading: false,
      isLoading: false
    }
  },
  [ROOM_MESSAGES_RECEIVE_GET_FAILURE]: (state) => ({
    ...state,
    roomMessagesRequestGetIsLoading: false,
    isLoading: false
  }),
  [ROOM_MESSAGES_REQUEST_POST]: (state) => ({
    ...state,
    roomMessagesRequestPostIsLoading: true,
    isLoading: true
  }),
  [ROOM_MESSAGES_RECEIVE_POST_SUCCESS]: (state) => ({
    ...state,
    roomMessagesRequestPostIsLoading: false,
    isLoading: false
  }),
  [ROOM_MESSAGES_RECEIVE_POST_FAILURE]: (state) => ({
    ...state,
    roomMessagesRequestPostIsLoading: false,
    isLoading: false
  }),
  [ROOM_DETAILS_REQUEST_GET]: (state) => ({
    ...state,
    roomDetailsRequestGetIsLoading: true,
    isLoading: true
  }),
  [ROOM_DETAILS_RECEIVE_GET_SUCCESS]: (state, action) => {
    if (typeof action.payload === 'object') {
      const { data, roomKey } = action.payload;
      const rooms = state.rooms.map((room) => {
        if (room.id === parseInt(roomKey)) {
          room['users'] = data.users;
        }
        return room;
      });

      return {
        ...state,
        rooms,
        roomDetailsRequestGetIsLoading: false,
        isLoading: false
      }
    }
    return {
      ...state,
      roomDetailsRequestGetIsLoading: false,
      isLoading: false
    }
  },
  [ROOM_DETAILS_RECEIVE_GET_FAILURE]: (state) => ({
    ...state,
    roomDetailsRequestGetIsLoading: false,
    isLoading: false
  }),
  [ROOMS_STALE]: (state, action) => {
    return {
      ...state,
      stale: action.payload
    }
  }
 });
// ------------------------------------
// Reducer
// ------------------------------------
export const chatRoomsReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS()[action.type];
  return handler ? handler(state, action) : state;
};
export default chatRoomsReducer;