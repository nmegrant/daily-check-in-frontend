import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectMe } from "../store/auth/selectors";
import { logOutUser } from "../store/auth/actions";
import { showMessageThunkCreator } from "../store/appstate/actions";
import { Button, Menu, MenuItem } from "@material-ui/core";

export default function CollapsableMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const me = useSelector(selectMe);
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
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ color: "white" }}
      >
        {me}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleNav}>My results</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
