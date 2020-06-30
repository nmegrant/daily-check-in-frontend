import { combineReducers } from "redux";
import user from "./user/reducer";
import sentiment from "./sentiment/reducer";
import text from "./text/reducer";

export default combineReducers({
  user,
  sentiment,
  text,
});
