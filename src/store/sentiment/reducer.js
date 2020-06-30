const intialState = { score: null };

export default function sentimentReducer(state = intialState, action) {
  switch (action.type) {
    case "NEW_SCORE":
      return { ...state, score: action.payload };
    default:
      return state;
  }
}
