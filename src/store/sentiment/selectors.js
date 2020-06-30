export function selectSentiment() {
  return (state) => {
    return state.sentiment.score;
  };
}

export function selectHistory() {
  return (state) => {
    return state.sentiment.history;
  };
}
