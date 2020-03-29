import {
  chatClient as api
} from './providers/axios';

export const daoRoomDetailsGet = (roomKey) => api.get(`/rooms/${roomKey}`);

export default {
  daoRoomDetailsGet
};