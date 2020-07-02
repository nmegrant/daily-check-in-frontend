import axios from "axios";
import { showMessageThunkCreator } from "../appstate/actions";
import { appLoading, appDoneLoading } from "../appstate/actions";

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

export function getUserListThunkCreator() {
  return async function getUser(dispatch, getState) {
    try {
      // const token = localStorage.getItem("token");
      dispatch(appLoading());
      const users = await axios.get("http://localhost:4000/admin/users", {
        headers: {
          // Authorization: `Bearer ${token}`,
          Authorization: `Bearer ${getState().auth.accessToken}`,
        },
      });
      dispatch(getUserList(users.data));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUserDataThunkCreator(userId) {
  return async function getUserData(dispatch, getState) {
    try {
      dispatch(appLoading());
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
      dispatch(appDoneLoading());
    }
  };
}
