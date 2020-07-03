import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Loading() {
  const classes = useStyles();
  return (
    <Wrapper className={classes.root}>
      <LinearProgress color="secondary" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
z-index: 5000;

`
