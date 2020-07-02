const initialState = { userlist: [], user: {} };

export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_LIST_FETCHED":
      return { ...state, userlist: [...action.payload] };
    case "USER_DATA_FETCHED":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
