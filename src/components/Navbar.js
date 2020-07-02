import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Button, Grid, IconButton } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import CollapsableMenu from "./CollapsableMenu";
import { selectAdmin } from "../store/auth/selectors";
import { useSelector } from "react-redux";

export default function Navbar() {
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
