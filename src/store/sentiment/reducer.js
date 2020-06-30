const intialState = { history: [], score: null };

export default function sentimentReducer(state = intialState, action) {
  switch (action.type) {
    case "NEW_SCORE":
      return { ...state, score: action.payload };
    case "GET_HISTORY":
      return { ...state, history: action.payload };
    default:
      return state;
  }
}
