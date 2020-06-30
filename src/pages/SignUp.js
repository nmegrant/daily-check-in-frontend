import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { signup } from "../store/auth/actions";

import {
  Typography,
  TextField,
  Grid,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    with: "100%",
  },
});

export default function SignUp() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(signup(name, email, password));
    setEmail("");
    setPassword("");
    setName("");
  }

  return (
    <form>
      <Grid
        container
        className={classes.root}
        direction="column"
        alignContent="center"
        justify="center"
        spacing="3"
      >
        <Grid item>
          <Typography variant="h3">Sign Up</Typography>
        </Grid>
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
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Sign up
          </Button>
        </Grid>
        <p>
          Already a member? <Link to="/login">Log in</Link> now!
        </p>
      </Grid>
    </form>
  );
}
