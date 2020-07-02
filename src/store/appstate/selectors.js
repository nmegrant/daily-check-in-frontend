export function selectMessageInfo() {
  return (state) => {
    return state.appstate.messageInfo;
  };
}

export function selectLoadingStatus() {
  return (state) => {
    return state.appstate.loading;
  };
}

export const selectTheme = (state) => state.appstate.theme;
