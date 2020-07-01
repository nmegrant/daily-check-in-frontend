import { combineReducers } from "redux";
import auth from "./auth/reducer";
import sentiment from "./sentiment/reducer";
import text from "./text/reducer";
import appstate from "./appstate/reducer";
import admin from "./admin/reducer";

export default combineReducers({
  auth,
  sentiment,
  text,
  appstate,
  admin,
});
