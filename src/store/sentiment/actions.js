import axios from "axios";

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
    console.log(getState());
    const sentimentHistory = await axios.get(
      "http://localhost:4000/sentiment",
      {
        headers: {
          Authorization: `Bearer ${getState().auth.accessToken}`,
        },
      }
    );
    dispatch(getHistory(sentimentHistory.data));
  };
}

export function sendSentimentTextThunkCreator(today, tomorrow, life) {
  return async function sendSentimentText(dispatch, getState) {
    const sentimentScore = await axios.post(
      "http://localhost:4000/sentiment",
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
    dispatch(scoreCalculated(sentimentScore.data.score));
  };
}
