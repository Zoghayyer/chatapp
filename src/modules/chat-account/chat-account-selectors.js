// ------------------------------------
// Selectors
// ------------------------------------

export const chatAccountTree = (state) => state.chatAccount || {};
export const chatAccountUsername = (state) => chatAccountTree(state).username || '';
export const chatAccountUserId = (state) => chatAccountTree(state).id || '';
export const chatAccountLoginTime = (state) => chatAccountTree(state).loginTime || 0;
export const chatAccountIsUserLoggedIn = (state) => (
  !!chatAccountUsername(state).length && !!chatAccountUserId(state).length
);