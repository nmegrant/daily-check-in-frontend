import React from "react";

import Alert from "@material-ui/lab/Alert";

export default function AlertBox(props) {
  return <Alert severity={props.severity}>{props.text}</Alert>;
}
