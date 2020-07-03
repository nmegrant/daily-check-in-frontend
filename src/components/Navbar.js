import React from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Button,
  IconButton,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import CollapsableMenu from "./CollapsableMenu";

import { ThemeToggler } from './ThemeToggler';
import styled from "styled-components";
import { colorScheme } from './ColorScheme';


export default function Navbar() {

  return (
    <NAVBAR>
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
  height: 3rem;
  position: fixed;
  z-index: 500;
  width: 100%;

  background: ${colorScheme.primaryColor};

  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`