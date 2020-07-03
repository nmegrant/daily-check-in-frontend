import axios from "../axios";
import { appLoading, appDoneLoading } from "../appstate/actions";

export function scoreCalculated(score) {
  return {
    type: "NEW_SCORE",
    payload: score,
  };
}

export function getHistory(history) {
  return {
    type: "GET_HISTORY",
    payload: history,
  };
}

export function getSentimentHistoryThunkCreator() {
  return async function getSentimentHistory(dispatch, getState) {
    try {
      dispatch(appLoading());
      const sentimentHistory = await axios.get("/sentiment", {
        headers: {
          Authorization: `Bearer ${getState().auth.accessToken}`,
        },
      });
      dispatch(getHistory(sentimentHistory.data));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log(error);
    }
  };
}

export function sendSentimentTextThunkCreator(today, tomorrow, life) {
  return async function sendSentimentText(dispatch, getState) {
    try {
      dispatch(appLoading());
      const sentimentScore = await axios.post(
        "/sentiment",
        {
          today,
          tomorrow,
          life,
        },
        {
          headers: {
            Authorization: `Bearer ${getState().auth.accessToken}`,
          },
        }
      );
      dispatch(appDoneLoading());
      dispatch(scoreCalculated(sentimentScore.data.score));
    } catch (error) {
      console.log(error);
      dispatch(showMessageThunkCreator(error.response.data.message, "error"));
    }
  };
}
