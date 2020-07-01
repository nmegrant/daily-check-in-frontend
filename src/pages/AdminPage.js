import React from "react";

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

  const rows = [
    { name: "Alicia", score: 1 },
    { name: "Cary", score: 2 },
    { name: "Diane", score: 1 },
    { name: "Will", score: 3 },
  ];

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
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="primary">
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
