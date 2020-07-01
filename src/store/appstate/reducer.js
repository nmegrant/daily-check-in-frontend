const initialState = {
  loading: false,
  message: null,
};

export default function appstateReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    case "CLEAR_MESSAGE":
      return { ...state, message: null };
  }
}
