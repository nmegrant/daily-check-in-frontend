export function selectUserList() {
  return (state) => {
    return state.admin.userlist;
  };
}

export function selectUserData() {
  return (state) => {
    return state.admin.user;
  };
}
