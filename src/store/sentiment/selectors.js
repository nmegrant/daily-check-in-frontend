export function selectSentiment() {
  return (state) => {
    return state.sentiment.score;
  };
}
