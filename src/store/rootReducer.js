import { combineReducers } from "redux";
import user from "./user/reducer";
import sentiment from "./sentiment/reducer";

export default combineReducers({
  user,
  sentiment,
});
