const initialState = {
  loading: false,
  messageInfo: null,
  theme: 'light'
};

export default function appstateReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_MESSAGE":
      return { ...state, messageInfo: action.payload };
    case "CLEAR_MESSAGE":
      return { ...state, messageInfo: null };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "DONE_LOADING":
      return {
        ...state,
        loading: false,
      };
    case "SET_THEME":
      return { ...state, theme: action.theme };
    default:
      return state;
  }
}
