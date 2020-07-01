import axios from "axios";

export function getUserListThunkCreator() {
  return async function getUser(dispatch, getState) {
    const users = await axios.get("http://localhost:4000/admin/users", {
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    console.log(users);
  };
}
