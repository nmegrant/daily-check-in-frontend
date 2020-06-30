import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  IconButton,
  useStyles,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    display: flex,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
              <Button color="inherit" component={RouterLink} to="/login">
                Login
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
