import React from 'react'
import Brightness2 from "@material-ui/icons/Brightness2";
import Brightness7 from "@material-ui/icons/Brightness7";
import { IconButton } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { selectTheme } from '../store/appstate/selectors';
import { useDispatch } from 'react-redux';
import { setTheme } from '../store/appstate/actions';

export const ThemeToggler = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const handleClick = () => {
    const new_theme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(new_theme));
  }
  return (
    <IconButton onClick={handleClick} color="inherit">
      {
        theme === 'light' ?
          <Brightness2 /> 
            : <Brightness7 />
      }   
    </IconButton>
  )
}