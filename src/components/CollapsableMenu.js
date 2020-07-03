import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectMe } from "../store/auth/selectors";
import { logOutUser } from "../store/auth/actions";
import { showMessageThunkCreator } from "../store/appstate/actions";
import { Button, Menu, MenuItem, IconButton } from "@material-ui/core";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { selectAdmin } from "../store/auth/selectors";
import { colorScheme } from './ColorScheme';

export default function CollapsableMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const me = useSelector(selectMe);

  const adminState = useSelector(selectAdmin);

  const history = useHistory();

  const handleNav = (event) => {
    event.preventDefault();
    history.push("/results");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    dispatch(logOutUser());
    dispatch(showMessageThunkCreator("Logged out", "info"));
  };

  return (
    <>
    {/*<COLLAPSABLE_MENU> */}
    <IconButton onClick={handleClick} color="inherit">
      <AccountCircleIcon />
    </IconButton>
      {/* <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ color: "white" }}
      >
        <AccountCircleIcon />
        {/* {me} */}
      {/* </Button> */} 
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleNav}>My results</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
        {adminState ? (
          <MenuItem>
            <RouterLink to="/admin" style={{ color: colorScheme.quaternaryColor }}>
              Admin View
            </RouterLink>
          </MenuItem>
        ) : null}
      </Menu>
      {/* </COLLAPSABLE_MENU> */}
    </>
  );
}

const COLLAPSABLE_MENU = styled.div`
  display: inline-flex;

`
