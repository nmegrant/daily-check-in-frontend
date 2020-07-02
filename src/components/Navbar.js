import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { selectMe } from "../store/auth/selectors";
// import { logOutUser } from "../store/auth/actions";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import CollapsableMenu from "./CollapsableMenu";
import { selectAdmin } from "../store/auth/selectors";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const adminState = useSelector(selectAdmin);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="homepage"
                component={RouterLink}
                to="/"
              >
                <HomeIcon />
              </IconButton>
            </Grid>
            <Grid item>
              {adminState ? (
                <RouterLink to="/admin" style={{ color: "white" }}>
                  Admin View
                </RouterLink>
              ) : null}
            </Grid>
            <Grid item>
              {localStorage.token ? (
                <CollapsableMenu />
              ) : (
                <Button color="inherit" component={RouterLink} to="/login">
                  Login
                </Button>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
