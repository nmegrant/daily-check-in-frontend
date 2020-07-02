import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserListThunkCreator,
  getUserDataThunkCreator,
} from "../store/admin/actions";
import { selectUserList, selectUserData } from "../store/admin/selectors";

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
  const user = useSelector(selectUserData());

  const colours = {
    "-5": "rgba(245, 0, 0, 0.5)",
    "-4": "rgba(245, 94, 0, 0.5)",
    "-3": "rgba(245, 159, 0, 0.5)",
    "-2": "rgba(245, 212, 0, 0.5)",
    "-1": "rgba(245, 245, 0, 0.5)",
    "0": "rgba(225, 245, 0, 0.5)",
    "1": "rgba(200, 245, 0, 0.5)",
    "2": "rgba(163, 245, 0, 0.5)",
    "3": "rgba(114, 245, 0, 0.5)",
    "4": "rgba(49, 245, 0, 0.5)",
    "5": "rgba(0, 245, 139, 0.5)",
  };

  console.log(userList);

  useEffect(() => {
    dispatch(getUserListThunkCreator());
  }, [dispatch]);

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
                <TableCell
                  component="th"
                  scope="row"
                  style={{ backgroundColor: "red" }}
                >
                  {userList.user.name}
                </TableCell>
                <TableCell align="right" style={{ backgroundColor: "red" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      dispatch(getUserDataThunkCreator(userList.id))
                    }
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
