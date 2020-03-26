import {
  chatClient as api
} from './providers/axios';

export const daoRoomsListGet = () => api.get('/rooms');

export default {
  daoRoomsListGet
};