import {
  chatClient as api
} from './providers/axios';

export const daoRoomMessagesGet = (roomKey) => api.get(`/rooms/${roomKey}/messages`);
export const daoRoomMessagesPost = (roomKey, payload) => api.post(`/rooms/${roomKey}/messages`, payload);

export default {
  daoRoomMessagesGet,
  daoRoomMessagesPost
};