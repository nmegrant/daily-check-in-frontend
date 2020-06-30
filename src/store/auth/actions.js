import axios from "axios";

export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const LOG_OUT_USER = "LOG_OUT_USER";

function userLoggedIn(userData) {
  return { type: USER_LOGGED_IN, payload: userData };
}

export function logOutUser() {
  return { type: LOG_OUT_USER, payload: null };
}

export function login(email, password) {
  return async function thunk(dispatch, getState) {
    const { data: userData } = await axios.post("http://localhost:4000/login", {
      email,
      password,
    });
    dispatch(userLoggedIn(userData));
  };
}

export function signup(name, email, password) {
  return async function thunk(dispatch, getState) {
    console.log(name, email, password);
  };
}

export function getUserWithStoredToken() {
  return async function thunk(dispatch, getState) {
    if (localStorage.getItem("token")) {
      try {
        const response = await axios.get("http://localhost:4000/me", {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        });
        dispatch(userLoggedIn({ ...response.data, token: localStorage.token }));
      } catch (e) {
        //jwt is invalid
        dispatch(logOutUser());
      }
    }
  };
}
