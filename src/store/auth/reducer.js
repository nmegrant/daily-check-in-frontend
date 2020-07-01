import { USER_LOGGED_IN, LOG_OUT_USER } from "./actions";

const initialState = {
  me: null, // the logged-in user
  accessToken: null,
  admin: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOGGED_IN: {
      const { token: accessToken, name: me, admin: admin } = action.payload;
      localStorage.setItem("token", accessToken);
      return { me, accessToken, admin };
    }
    case LOG_OUT_USER: {
      localStorage.removeItem("token");
      return initialState;
    }
    default:
      return state;
  }
}
