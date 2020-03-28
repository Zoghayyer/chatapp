/**
 * This file should contain all of the compound selector to avoid any circular dependency issues.
 */
import {
  chatAccountUsername
} from '../modules/chat-account';
import {
  chatRoomsByKeyRoomMessages
} from '../modules/chat-rooms';

// ------------------------------------
// Compound Selectors
// ------------------------------------
const chatRoomsByKeyRoomMessagesAdmin = (state, roomKey) => {
  const username = chatAccountUsername(state);
  return chatRoomsByKeyRoomMessages(state, roomKey).filter(({ name }) => name === username);
};

const chatRoomsByKeyRoomMessagesOthers = (state, roomKey) => {
  const username = chatAccountUsername(state);
  return chatRoomsByKeyRoomMessages(state, roomKey).filter(({ name }) => name !== username);
};

export default {
  chatRoomsByKeyRoomMessagesAdmin,
  chatRoomsByKeyRoomMessagesOthers
};