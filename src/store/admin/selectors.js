export function selectUserList() {
  return (state) => {
    return state.admin.userList;
  };
}
