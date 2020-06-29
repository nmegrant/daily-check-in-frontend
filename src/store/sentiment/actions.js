import axios from "axios";

export function sendSentimentTextThunkCreator(today, tomorrow, life) {
  return async function sendSentimentText(dispatch, getState) {
    console.log(today, tomorrow, life);
  };
}
