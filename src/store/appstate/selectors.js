export function selectMessageInfo() {
  return (state) => {
    return state.appstate.messageInfo;
  };
}

export function selectLoadingStatus() {
  return (state) => {
    return state.appState.loading;
  };
}
