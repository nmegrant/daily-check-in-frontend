export function setMessage(message, severity) {
  return {
    type: "SET_MESSAGE",
    payload: {
      message,
      severity,
    },
  };
}

export function clearMessage() {
  return {
    type: "CLEAR_MESSAGE",
  };
}

export function appLoading() {
  return {
    type: "LOADING",
  };
}

export function appDoneLoading() {
  return {
    type: "DONE_LOADING",
  };
}

export function showMessageThunkCreator(message, severity) {
  return function showMessage(dispatch, getState) {
    dispatch(setMessage(message, severity));
    setTimeout(() => dispatch(clearMessage()), 2500);
  };
}
