const initialState = {
  loading: false,
  messageInfo: null,
};

export default function appstateReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_MESSAGE":
      return { ...state, messageInfo: action.payload };
    case "CLEAR_MESSAGE":
      return { ...state, messageInfo: null };
    default:
      return state;
  }
}
