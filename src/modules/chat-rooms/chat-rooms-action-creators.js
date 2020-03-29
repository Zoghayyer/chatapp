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
import {
  daoRoomDetailsGet
} from '../../dao/room-details-dao';
import { 
  daoRoomsListGet
} from '../../dao/rooms-list-dao';
import {
  daoRoomMessagesGet,
  daoRoomMessagesPost
} from '../../dao/room-messages-dao';

// ------------------------------------
// Actions
// ------------------------------------

export const roomsStale = (payload) => ({
  type: ROOMS_STALE,
  payload
});

export const roomsReceiveGetSuccess = (payload = {}) => ({
  type: ROOMS_RECEIVE_GET_SUCCESS,
  payload
});

export const roomsReceiveGetFailure = (payload = {}) => ({
  type: ROOMS_RECEIVE_GET_FAILURE,
  payload
});

export const roomsRequestGet = () => async (dispatch) => {
  dispatch({
    type: ROOMS_REQUEST_GET
  });

  try {
    const { data } = await daoRoomsListGet();
    return dispatch(roomsReceiveGetSuccess(data));
  } catch(error) {
    return dispatch(roomsReceiveGetFailure(error));
  }
};

export const roomMessagesReceiveGetSuccess = (payload = {}) => ({
  type: ROOM_MESSAGES_RECEIVE_GET_SUCCESS,
  payload
});

export const roomMessagesReceiveGetFailure = (payload = {}) => ({
  type: ROOM_MESSAGES_RECEIVE_GET_FAILURE,
  payload
});

export const roomMessagesRequestGet = (roomKey) => async (dispatch) => {
  dispatch({
    type: ROOM_MESSAGES_REQUEST_GET
  });

  try {
    const { data } = await daoRoomMessagesGet(roomKey);
    return dispatch(roomMessagesReceiveGetSuccess({data, roomKey}));
  } catch (error) {
    return dispatch(roomMessagesReceiveGetFailure(error));
  }
};

export const roomMessagesReceivePostSuccess = (payload = {}) => ({
  type: ROOM_MESSAGES_RECEIVE_POST_SUCCESS
});

export const roomMessagesReceivePostFailure = (payload = {}) => ({
  type: ROOM_MESSAGES_RECEIVE_POST_FAILURE,
  payload
});

export const roomMessagesRequestPost = (roomKey, payload) => async (dispatch) => {
  dispatch({
    type: ROOM_MESSAGES_REQUEST_POST
  });

  try {
    await daoRoomMessagesPost(roomKey, payload);
    return dispatch(roomMessagesReceivePostSuccess());
  } catch (error) {
    return dispatch(roomMessagesReceivePostFailure(error));
  }
};

export const roomDetailsReceiveGetSuccess = (payload = {}) => ({
  type: ROOM_DETAILS_RECEIVE_GET_SUCCESS,
  payload
});

export const roomDetailsReceiveGetFailure = (payload = {}) => ({
  type: ROOM_DETAILS_RECEIVE_GET_FAILURE,
  payload
});

export const roomDetailsRequestGet = (roomKey) => async (dispatch) => {
  dispatch({
    type: ROOM_DETAILS_REQUEST_GET
  });

  try {
    const { data } = await daoRoomDetailsGet(roomKey);
    return dispatch(roomDetailsReceiveGetSuccess({ data, roomKey }));
  } catch (error) {
    return dispatch(roomDetailsReceiveGetFailure(error));
  }
};
