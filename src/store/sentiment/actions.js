import axios from "axios";

export function sendSentimentTextThunkCreator(today, tomorrow, life) {
  return async function sendSentimentText(dispatch, getState) {
    const sentimentScore = await axios.post("http://localhost:4000/sentiment", {
      today,
      tomorrow,
      life,
    });
    console.log(sentimentScore);
  };
}
