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
import styled from "styled-components";
import { AreaGraph, BarGraph } from '../components/graph';

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
  },
});

const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

export default function AdminPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userList = useSelector(selectUserList());
  const user = useSelector(selectUserData());
  // console.log(user);

  const userData = (()=>{
    if(user){
      const separateHistory = (sentiments) => {
        return sentiments.map(s => {
          const date = new Date(s.createdAt);
          return {
            score: s.score,
            comparativeScore: s.comparativeScore,
            testYear: date.getFullYear(),
            testMonth: date.getMonth(),
            testDay: date.getDay(),
          }
        })
      }
      return separateHistory(user.sentiments);   
    } else return null
  })();

  const userScores = (()=>{
    if(userData){
      const score = {};
      months.forEach((month, i) => score[month] = userData.filter(data => data.testMonth === i))
      return score;
    } else return null;
  })();
  console.log(userScores)

  useEffect(() => {
    dispatch(getUserListThunkCreator());
  }, [dispatch]);

  return (
    <>
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

    { (userData, userScores) && 
      <>
      <AVARAGE_SCORE_WRAPPER>
        <SCORE_CONTAINER>
          <BarGraph
            score={3}
            min={-5}
            max={5}
            ticks={[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]}
          />
        </SCORE_CONTAINER>
        <SCORE_CONTAINER>
          <BarGraph
            score={-4}
            min={-5}
            max={5}
            ticks={[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]}
          />
        </SCORE_CONTAINER>
      </AVARAGE_SCORE_WRAPPER>
      <GRAPH_WRAPPER>
        {months.map((month, i) => ( 
          userScores[month].length ?
          <GRAPH_CONTAINER key={month}>
            <MONT_HEADING>{month}</MONT_HEADING>
            {
              <AreaGraph
              data={userScores[month]}
              min={-5}
              max={5}
              primary_key={"score"}
              x_dataKey={"testDay"}
              x_label={"Day"}
              y_label={"Score"}
              secondary_key={"comparativeScore"}
              showSecondaryDataAsLine={true}
              duotone={true}
              y_ticks={[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]}
            />
            }
          </GRAPH_CONTAINER>
          : null
        ))}
      </GRAPH_WRAPPER>
      </>
    }
    </>
  );
}

const GRAPH_WRAPPER = styled.div`
  /* border: 3px solid red; */
  width: 100%;
  min-height: 100px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* flex: 3; */
  flex-wrap: wrap;
  margin: 2rem 0rem;
`

const GRAPH_CONTAINER = styled.div`
  /* border: 3px solid green; */
  flex: 0 0 30%;
  min-height: 200px;
  padding: 1rem;
  box-shadow: 0px 0px 10px -3px rgba(0,0,0,0.75);
`;

const MONT_HEADING = styled.h1`
  font-size: 2rem;
`

const AVARAGE_SCORE_WRAPPER = styled.div`
  /* border: 3px solid gold; */
  min-height: 100px;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-around;
  
  margin-bottom: 2rem;
  margin-top: 1rem;
`
const SCORE_CONTAINER = styled.div`
  /* border: 3px solid blue; */
  flex: 0 0 40%;
  padding: 2rem;
  box-shadow: 0px 0px 10px -3px rgba(0,0,0,0.75);
`