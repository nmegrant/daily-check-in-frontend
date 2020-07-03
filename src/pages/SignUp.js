import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { signup } from "../store/auth/actions";
import { STYLED_A } from "./Homepage";
import { Button } from "./FormPage";
import {
  TextField,
  Grid,
} from "@material-ui/core";
import { Container } from "./LoginPage";
import { selectTheme } from "../store/appstate/selectors";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(signup(name, email, password));
    setEmail("");
    setPassword("");
    setName("");
  }

  return (
    <Container theme={theme}>
        <Grid item>
        <TextField
            id="name-input"
            label="Name"
            type="string"
            autoComplete="current-name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
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
          Sign up
          </Button>
        </Grid>
        <p>
        Already a member? <STYLED_A href="/login">Log in</STYLED_A> now!
        </p>
    </Container>
  );
}
