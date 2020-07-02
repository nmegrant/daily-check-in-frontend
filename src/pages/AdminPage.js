import React, { useEffect, useState } from "react";
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
  const [ascending, setAscending] = useState(false);
  const [descending, setDescending] = useState(false);

  const colours = {
    "-5": "rgba(245, 0, 0, 0.3)",
    "-4": "rgba(245, 94, 0, 0.3)",
    "-3": "rgba(245, 159, 0, 0.3)",
    "-2": "rgba(245, 212, 0, 0.3)",
    "-1": "rgba(245, 245, 0, 0.3)",
    "0": "rgba(225, 245, 0, 0.3)",
    "1": "rgba(200, 245, 0, 0.3)",
    "2": "rgba(163, 245, 0, 0.3)",
    "3": "rgba(114, 245, 0, 0.3)",
    "4": "rgba(49, 245, 0, 0.3)",
    "5": "rgba(0, 245, 139, 0.3)",
  };

  useEffect(() => {
    dispatch(getUserListThunkCreator());
  }, [dispatch]);

  const ascendingSortedList = [...userList].sort(
    (user_a, user_b) => user_a.score - user_b.score
  );

  const descendingSortedList = [...userList].sort(
    (user_a, user_b) => user_b.score - user_a.score
  );

  const sortedList = ascending
    ? ascendingSortedList
    : descending
    ? descendingSortedList
    : userList;

  return (
    <Grid container justify="center">
      <h1>List of users</h1>

      <TableContainer>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: "10px" }}
          onClick={() => {
            setAscending(true);
            setDescending(false);
          }}
        >
          Ascending Order
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "10px" }}
          onClick={() => {
            setAscending(false);
            setDescending(true);
          }}
        >
          Descending Order
        </Button>
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
            {sortedList.map((userList, index) => {
              const bg = colours[Math.floor(userList.score)];
              return (
                <TableRow key={index}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ backgroundColor: bg }}
                  >
                    {userList.user.name}
                  </TableCell>
                  <TableCell align="right" style={{ backgroundColor: bg }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        dispatch(getUserDataThunkCreator(userList.user.id))
                      }
                    >
                      Get User Data
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
