import axios from "axios";
import { showMessageThunkCreator } from "../appstate/actions";

export function getUserList(userList) {
  return {
    type: "USER_LIST_FETCHED",
    payload: userList,
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
        `http://localhost:4000/admin/users/:${userId}`,
        {
          headers: {
            Authorization: `Bearer ${getState().auth.accessToken}`,
          },
        }
      );
      console.log(user.data);
      // dispatch(getUserData(user.data))
    } catch (error) {
      console.log(error);
      dispatch(showMessageThunkCreator(error.response.data.message, "error"));
    }
  };
}
