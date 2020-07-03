import React from "react";

import Alert from "@material-ui/lab/Alert";
import styled from "styled-components";

export default function AlertBox(props) {
  return <AlertWrapper><Alert severity={props.severity}>{props.text}</Alert></AlertWrapper>;
}
const AlertWrapper = styled.div`
  z-index: 9999;
  position: fixed;
  width: 100%;
  top: 3rem;
`
