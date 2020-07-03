import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth/actions";
import {
  // Typography,
  TextField,
  Grid,
  // Button,
  makeStyles,
} from "@material-ui/core";
import styled from "styled-components";
import { selectTheme } from "../store/appstate/selectors";
// import { colorScheme } from '../components/ColorScheme';
import { darkTheme } from "../components/Themes";
import { STYLED_A } from "./Homepage";
import { Button } from "./FormPage";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    with: "100%",
  },
});

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const classes = useStyles();
  const theme = useSelector(selectTheme);
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
  }

  return (
    <Container theme={theme}>
        <Grid item>
          <TextField
            id="email-input"
            label="Email"
            type="email"
            autoComplete="current-email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            id="password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button theme={theme} fontSize="1.5rem" onClick={handleSubmit} style={{marginTop: '2rem'}}>
            Log in
          </Button>
        </Grid>
        <p>
          Not a member? Don't miss out! <STYLED_A href="/signup">Sign up</STYLED_A> now!
        </p>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    margin: 0.15rem 0;
    font-size: 2rem;
  }

  label {
    color: ${props => props.theme === 'dark' ? darkTheme.text : undefined};
  }
  input {
    color: ${props => props.theme === 'dark' ? darkTheme.text : undefined};
    &:-webkit-autofill::first-line,
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        font-size: 2rem;
        font-family: 'Roboto', sans-serif;
      }
  }
`;
