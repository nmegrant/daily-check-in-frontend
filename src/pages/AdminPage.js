import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserListThunkCreator,
  getUserDataThunkCreator,
} from "../store/admin/actions";
import { selectUserList } from "../store/admin/selectors";

import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
  },
});

export default function AdminPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userList = useSelector(selectUserList());

  useEffect(() => {
    dispatch(getUserListThunkCreator());
  }, [dispatch]);

  function getUserData(event) {
    event.preventDefault();
    dispatch(getUserDataThunkCreator(6));
  }

  return (
    <Grid container justify="center">
      <h1>List of users</h1>
      <TableContainer>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
          style={{ margin: "0 auto" }}
        >
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell align="right">Fetch History</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((userList, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {userList.name}
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={getUserData}
                  >
                    Get User Data
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
