import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/auth/actions";
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

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
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
          <Typography color="secondary" variant="h3">
            Login
          </Typography>
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
            Log in
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
