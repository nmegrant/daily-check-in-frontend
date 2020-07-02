import axios from "axios";
import { showMessageThunkCreator } from "../appstate/actions";

export function getUserList(userList) {
  return {
    type: "USER_LIST_FETCHED",
    payload: userList,
  };
}

export function getData(userData) {
  return {
    type: "USER_DATA_FETCHED",
    payload: userData,
  };
}

export function appLoading() {
  return {
    type: "LOADING",
    payload: true,
  };
}

export function appDoneLoading() {
  return {
    type: "DONE_LOADING",
    payload: false,
  };
}

export function getUserListThunkCreator() {
  return async function getUser(dispatch, getState) {
    try {
      // const token = localStorage.getItem("token");
      const users = await axios.get("http://localhost:4000/admin/users", {
        headers: {
          // Authorization: `Bearer ${token}`,
          Authorization: `Bearer ${getState().auth.accessToken}`,
        },
      });
      dispatch(getUserList(users.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUserDataThunkCreator(userId) {
  return async function getUserData(dispatch, getState) {
    try {
      const user = await axios.get(
        `http://localhost:4000/admin/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${getState().auth.accessToken}`,
          },
        }
      );
      dispatch(getData(user.data));
    } catch (error) {
      console.log(error);
      dispatch(showMessageThunkCreator("Could not retrieve data", "error"));
    }
  };
}
