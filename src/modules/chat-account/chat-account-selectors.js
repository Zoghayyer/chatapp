// ------------------------------------
// Selectors
// ------------------------------------

export const chatAccountTree = (state) => state.chatAccount || {};
export const chatAccountUsername = (state) => chatAccountTree(state).username || '';
export const chatAccountIsUserLoggedIn = (state) => !!chatAccountUsername(state).length;