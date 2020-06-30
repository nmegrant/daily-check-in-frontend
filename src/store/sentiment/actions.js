import axios from "axios";

export function scoreCalculated(score) {
  return {
    type: "NEW_SCORE",
    payload: score,
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
