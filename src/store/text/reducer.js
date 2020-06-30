const initialState = { text: "" };

export default function textReducer(state = initialState, action) {
  switch (action.type) {
    case "NEW_TEXT":
      return { text: action.payload };
    default:
      return state;
  }
}
