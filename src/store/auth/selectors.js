//refactor selector to get the whole user object

export const selectMe = (state) => state.auth.me;

export const selectToken = (state) => state.auth.accessToken;

export const selectAdmin = (state) => state.auth.admin;
