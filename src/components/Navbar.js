import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { selectMe } from "../store/auth/selectors";
// import { logOutUser } from "../store/auth/actions";
import { Link as RouterLink } from "react-router-dom";
import {
  // AppBar,
  Toolbar,
  Button,
  Grid,
  IconButton,
  // makeStyles,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import CollapsableMenu from "./CollapsableMenu";
// import { selectAdmin } from "../store/auth/selectors";
import { useSelector } from "react-redux";

import { ThemeToggler } from './ThemeToggler';
import styled from "styled-components";
import { colorScheme } from './ColorScheme';


export default function Navbar() {
  // const classes = useStyles();
  // const adminState = useSelector(selectAdmin);

  return (
    <NAVBAR>
      
        {/* <Toolbar style={{width: '100%', color: 'white'}}>
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
            <Grid item >
            </Grid>
            
            <Grid item>
              {localStorage.token ? (
                <CollapsableMenu />
              ) : (
                <Button color="inherit" component={RouterLink} to="/login">
                  Login
                </Button>
              )}
            
              <ThemeToggler />  
            </Grid>
          </Grid>
        </Toolbar>
       */}
       <IconButton
          color="inherit"
          aria-label="homepage"
          component={RouterLink}
          to="/"
        >
          <HomeIcon />
        </IconButton>
        <USER_SETTINGS>
        {localStorage.token ? (
            <CollapsableMenu />
          ) : (
            <Button color="inherit" component={RouterLink} to="/login">
              Login
            </Button>
          )}
          <ThemeToggler />
        </USER_SETTINGS> 
      </NAVBAR>
  );
}

const USER_SETTINGS = styled.div`
  border-left: 2px dotted rgba(255,255,255,0.4);
  padding-left: 0.5rem;
`


const NAVBAR = styled.div`
  min-height: 1rem;
  position: fixed;
  z-index: 500;
  width: 100%;

  background: ${colorScheme.primaryColor};

  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`