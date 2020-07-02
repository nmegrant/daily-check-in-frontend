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

export default function AdminPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userList = useSelector(selectUserList());
  const user = useSelector(selectUserData());

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

  // console.log(userList)
  // console.log(user)

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
            testDay: date.getUTCDate()
          }
        })
      }
      return separateHistory(user.sentiments);   
    } else return null
  })();
  // console.log(user)

  const userScores = (()=>{
    if(userData){
      const score = {};
      months.forEach((month, i) => score[month] = userData.filter(data => data.testMonth === i))
      return score;
    } else return null;
  })();


  useEffect(() => {
    dispatch(getUserListThunkCreator());
  }, [dispatch]);

  return (
    <>
    <Grid container justify="center">
      <h1>List of users</h1>

      <TableContainer>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: "10px" }}
        >
          Ascending Order
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "10px" }}
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
            {userList.map((ul, index) => {
              const bg = colours[Math.floor(ul.score)];
              return (
                <TableRow key={index}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ backgroundColor: bg }}
                  >
                    {ul.user.name}
                  </TableCell>
                  <TableCell align="right" style={{ backgroundColor: bg }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        dispatch(getUserDataThunkCreator(ul.user.id))
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

{ (user && userData && userScores) && 
  <>
  <USERNAME>Stats for patient #{user.id}: {user.name}</USERNAME>
  <AVARAGE_SCORE_WRAPPER>
    <SCORE_CONTAINER>
      <SCORE_TITLE>Sentiment Score</SCORE_TITLE>
      <BarGraph
        score={Math.round(user.sentiments.map(s=>s.score).reduce((a,c)=>a+c)/user.sentiments.length)}
        min={-5}
        max={5}
        ticks={[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]}
      />
    </SCORE_CONTAINER>
    <SCORE_CONTAINER>
      <SCORE_TITLE>Comparative Score</SCORE_TITLE>
      <BarGraph
        score={Math.round(user.sentiments.map(s=>s.comparativeScore).reduce((a,c)=>a+c)/user.sentiments.length)}
        min={-5}
        max={5}
        ticks={[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]}
      />
    </SCORE_CONTAINER>
  </AVARAGE_SCORE_WRAPPER>
  <HISTORY_TITLE>User history:</HISTORY_TITLE>
  <GRAPH_WRAPPER>
    {months.map((month, i) => ( 
      userScores[month].length ?
      <GRAPH_CONTAINER key={month}>
        <MONTH_HEADING>{month}</MONTH_HEADING>
        <SAMPLES>Total Samples: {userScores[month].length}</SAMPLES>
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



// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getUserListThunkCreator,
//   getUserDataThunkCreator,
// } from "../store/admin/actions";
// import { selectUserList, selectUserData } from "../store/admin/selectors";

// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Grid,
//   Button,
// } from "@material-ui/core";
// import styled from "styled-components";
// import { AreaGraph, BarGraph } from '../components/graph';

// const useStyles = makeStyles({
//   table: {
//     maxWidth: 650,
//   },
// });

// const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
// // const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// export default function AdminPage() {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const userList = useSelector(selectUserList());
//   const user = useSelector(selectUserData());

//   const userData = (()=>{
//     if(user){
//       const separateHistory = (sentiments) => {
//         return sentiments.map(s => {
//           const date = new Date(s.createdAt);
//           return {
//             score: s.score,
//             comparativeScore: s.comparativeScore,
//             testYear: date.getFullYear(),
//             testMonth: date.getMonth(),
//             testDay: date.getUTCDate()
//           }
//         })
//       }
//       return separateHistory(user.sentiments);   
//     } else return null
//   })();
//   // console.log(user)

//   const userScores = (()=>{
//     if(userData){
//       const score = {};
//       months.forEach((month, i) => score[month] = userData.filter(data => data.testMonth === i))
//       return score;
//     } else return null;
//   })();
//   // console.log(userScores)

//   useEffect(() => {
//     dispatch(getUserListThunkCreator());
//   }, [dispatch]);

//   return (
//     <>
//     <Grid container justify="center">
//       <h1>List of users</h1>
//       <TableContainer>
//         <Table
//           className={classes.table}
//           size="small"
//           aria-label="a dense table"
//           style={{ margin: "0 auto" }}
//         >
//           <TableHead>
//             <TableRow>
//               <TableCell>User Name</TableCell>
//               <TableCell align="right">Fetch History</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {userList.map((userList, index) => (
//               <TableRow key={index}>
//                 <TableCell component="th" scope="row">
//                   {userList.name}
//                 </TableCell>
//                 <TableCell align="right">
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() =>
//                       dispatch(getUserDataThunkCreator(userList.id))
//                     }
//                   >
//                     Get User Data
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Grid>

//     { (user && userData && userScores) && 
//       <>
//       <USERNAME>Stats for patient #{user.id}: {user.name}</USERNAME>
//       <AVARAGE_SCORE_WRAPPER>
//         <SCORE_CONTAINER>
//           <SCORE_TITLE>Sentiment Score</SCORE_TITLE>
//           <BarGraph
//             score={3}
//             min={-5}
//             max={5}
//             ticks={[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]}
//           />
//         </SCORE_CONTAINER>
//         <SCORE_CONTAINER>
//           <SCORE_TITLE>Comparative Score</SCORE_TITLE>
//           <BarGraph
//             score={-4}
//             min={-5}
//             max={5}
//             ticks={[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]}
//           />
//         </SCORE_CONTAINER>
//       </AVARAGE_SCORE_WRAPPER>
//       <HISTORY_TITLE>User history:</HISTORY_TITLE>
//       <GRAPH_WRAPPER>
//         {months.map((month, i) => ( 
//           userScores[month].length ?
//           <GRAPH_CONTAINER key={month}>
//             <MONTH_HEADING>{month}</MONTH_HEADING>
//             <SAMPLES>Total Samples: {userScores[month].length}</SAMPLES>
//             {
//               <AreaGraph
//                 data={userScores[month]}
//                 min={-5}
//                 max={5}
//                 primary_key={"score"}
//                 x_dataKey={"testDay"}
//                 x_label={"Day"}
//                 y_label={"Score"}
//                 secondary_key={"comparativeScore"}
//                 showSecondaryDataAsLine={true}
//                 duotone={true}
//                 y_ticks={[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]}
//               />
//             }
//           </GRAPH_CONTAINER>
//           : null
//         ))}
//       </GRAPH_WRAPPER>
//       </>
//     }
//     </>
//   );
// }

const USERNAME = styled.h1`

`

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
`;

const HISTORY_TITLE = styled.h1`

`

const GRAPH_CONTAINER = styled.div`
  /* border: 3px solid green; */
  flex: 0 0 30%;
  min-height: 200px;
  padding: 1rem;
  box-shadow: 0px 0px 10px -3px rgba(0,0,0,0.75);
`;

const MONTH_HEADING = styled.h1`
  font-size: 2rem;
`
const SAMPLES = styled.h3`
  font-size: 1rem;
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

const SCORE_TITLE = styled.h2`

`