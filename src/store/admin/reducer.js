const initialState = { userlist: [], user: {} };

export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_LIST_FETCHED":
      return { ...state, userlist: [...action.payload] };
    default:
      return state;
  }
}
