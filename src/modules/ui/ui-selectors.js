// ------------------------------------
// Selectors
// ------------------------------------

export const uiTree = (state) => state.ui || {};
export const uiChatRooms = (state) => uiTree(state).chatRooms || {};
export const uiChatRoomsRoomKey = (state) => uiChatRooms(state).roomKey || '';