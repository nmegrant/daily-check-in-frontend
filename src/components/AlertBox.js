import React from "react";
import { useSelector } from "react-redux";
import { selectMessageInfo } from "../store/appstate/selectors";

import Alert from "@material-ui/lab/Alert";

export default function AlertBox() {
  const message = useSelector(selectMessageInfo());

  const showMessage = message === null ? false : true;
  const severity = message.severity;
  const text = message.message;

  return <Alert severity={severity}>{text}</Alert>;
}
