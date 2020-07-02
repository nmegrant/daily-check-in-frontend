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
import { selectAdmin } from "../store/auth/selectors";
import { useSelector } from "react-redux";

import { ThemeToggler } from './ThemeToggler';
import styled from "styled-components";
import { colorScheme } from './ColorScheme';


export default function Navbar() {
  // const classes = useStyles();
  const adminState = useSelector(selectAdmin);

  return (
    <Collapsable>
      {/* <AppBar position="static"> */}
        <Toolbar style={{width: '100%', color: 'white'}}>
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
              <Title>Sentiment Assessment</Title>
            </Grid>
            
            <Grid item>
              {localStorage.token ? (
                <CollapsableMenu />
              ) : (
                <Button color="inherit" component={RouterLink} to="/login">
                  Login
                </Button>
              )}
            
              {adminState ? (
                <RouterLink to="/admin" style={{ color: "white" }}>
                  Admin View
                </RouterLink>
              ) : null}
            
              <ThemeToggler />  
            </Grid>
          </Grid>
        </Toolbar>
      {/* </AppBar> */}
      </Collapsable>
  );
}


const Title = styled.h2`
  margin: 0;
  padding: 0;

  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Collapsable = styled.div`
  position: fixed;
  top: 0;
  width: 100%;

  transform-origin: top;
  transform: scaleY(0.3);

  transition: transform 0.3s ease;

  background: ${colorScheme.primaryColor};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  &:hover {
    transform: scaleY(1);
    div {
      opacity: 1;
    }
  }

  div {
    opacity: 0;
    transition: opacity 0.2s ease;
    background-color: ${colorScheme.primaryColor};
  }
`