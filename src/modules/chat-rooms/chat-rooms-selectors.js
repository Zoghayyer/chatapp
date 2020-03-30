// ------------------------------------
// Selectors
// ------------------------------------
export const chatRoomsTree = (state) => state.chatRooms || {};
export const chatRoomsIsLoading = (state) => chatRoomsTree(state).isLoading;
export const chatRoomsRequestGetIsLoading = (state) => chatRoomsTree(state).roomsRequestGetIsLoading;
export const chatRoomsIsStale = (state) => chatRoomsTree(state).stale;
export const chatRooms = (state) => chatRoomsTree(state).rooms || [];
export const chatRoomsByKeyRoom = (state, roomKey) => chatRooms(state).find(({ id }) => id === parseInt(roomKey)) || {};
export const chatRoomsByKeyRoomMessages = (state, roomKey) => chatRoomsByKeyRoom(state, parseInt(roomKey)).messages || [];
export const chatRoomsByKeyRoomUsers = (state, roomKey) => chatRoomsByKeyRoom(state, parseInt(roomKey)).users || [];
export const chatRoomsByKeyRoomName = (state, roomKey) => chatRoomsByKeyRoom(state, parseInt(roomKey)).name || '';