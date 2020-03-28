// ------------------------------------
// Selectors
// ------------------------------------
export const chatRoomsTree = (state) => state.chatRooms || {};
export const chatRoomsIsLoading = (state) => chatRoomsTree(state).isLoading;
export const chatRooms = (state) => chatRoomsTree(state).rooms || [];
export const chatRoomsByKeyRoom = (state, roomKey) => chatRooms(state).find(({ id }) => id === parseInt(roomKey)) || {};
export const chatRoomsByKeyRoomMessages = (state, roomKey) => chatRoomsByKeyRoom(state, parseInt(roomKey)).messages || [];