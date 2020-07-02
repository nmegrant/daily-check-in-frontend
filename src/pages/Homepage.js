import React from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";
import { colorScheme } from '../components/ColorScheme';

export default function Homepage() {
  const history = useHistory();
  return (
    <Container>
      <NAME_WRAP>
        <STYLED_H1>Sentiment</STYLED_H1>
        <STYLED_H1>Assessment</STYLED_H1>
      </NAME_WRAP>
      <BUTTON
        onClick={() => history.push("/form")}
      >
        <span>Start Assessment</span>
      </BUTTON>
      <HelplineBox>
        <h4>
          Our site uses the{" "}
          <STYLED_A href="https://www.npmjs.com/package/sentiment">sentiment</STYLED_A>{' '}
          module to evaluate user stress levels. <br />
          To improve accessibility we include speech recognition.
        </h4>
        <p>
          If you are feeling stresed, overwhelmed, or depressed please contact
          the appropriate health authorities:<br />
          <STYLED_A href="https://www.government.nl/topics/mental-health-services/question-and-answer/help-for-mental-health-problems">
          Where can I get help for mental health problems?
          </STYLED_A>
        </p>
        <STYLED_UL>
          <STYLED_LI>For Alcoholics Anonymous dial: 020 625 6057</STYLED_LI>
          <STYLED_LI>For Sexual Abuse hotline dial: 0900 899 8411</STYLED_LI>
          <STYLED_LI>For SOS helpline dial: 0900 0767</STYLED_LI>
          <STYLED_LI>For ChildLine dial: 0800 0432</STYLED_LI>
          <STYLED_LI>
            <STYLED_A href="https://access-nl.org/living-netherlands/emergency-numbers-and-other-useful-information/">
              More information 
            </STYLED_A> 
            {' '}and{' '}
            <STYLED_A href="https://www.thehagueinternationalcentre.nl/living-in-the-hague-region/health-care/mental-health">
              Even more information
            </STYLED_A>
           </STYLED_LI>
        </STYLED_UL>
      </HelplineBox>
    </Container>
  );
}



const Container = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;

  /* border: 3px solid red; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BUTTON = styled.div`
  padding: 30px;
  /* font-family: 'Roboto', sans-serif; */
  font-size: 2.5rem;
  border-image-slice: 1;
  border-width: 10px;
  border-style: solid;


  border-image-source: linear-gradient(to left, ${colorScheme.tertiaryColor}, ${colorScheme.quaternaryColor});
  user-select: none;
  transform: scale(1);
  background-color: rgba(0,0,0,0);
  transition: background-color 0.15s ease, 
              border-width 0.15s ease;
  
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.43);
  &:hover {
    border-width: 0px;
    border-color: transparent;
    background-color: white;
  }

  &:active {
    transform: scale(0.9);
  }

  span {
    background: linear-gradient(to left, ${colorScheme.tertiaryColor}, ${colorScheme.quaternaryColor});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const HelplineBox = styled.div`
  position: fixed;
  bottom: 1rem;
  width: 100%;
  max-width: 1000px;
  padding: 0 1rem;

  min-height: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 0.75rem;

  h4, p{
    text-align: center;
  }
`;

const STYLED_UL = styled.ul`
  list-style: none;
  padding: 0;
`

const STYLED_LI = styled.li`
  text-align: center;
`

const STYLED_A = styled.a`
  color: ${colorScheme.primaryColor};
  text-decoration: none;
`;

const NAME_WRAP = styled.div`
  position: fixed;
  top: 3.5rem;
  /* color: ${colorScheme.quaternaryColor}; */
  /* font-size: 3rem; */
  transform: rotate(-4deg);
  user-select: none;

  h1:first-child{
   margin-bottom: -6rem;
  }
  `

const STYLED_H1 = styled.h1`
  text-align: center;
  font-family: 'Yellowtail', cursive;
  font-size: 8.5rem;
  margin: 0;
  
  letter-spacing: 0.2rem;
`;


// import React from "react";
// import { useHistory } from "react-router-dom";

// import {
//   Typography,
//   Grid,
//   Button,
//   Link,
//   List,
//   ListItem,
// } from "@material-ui/core";

// export default function Homepage() {
//   const history = useHistory();
//   return (
//     <Grid
//       container
//       direction="row"
//       justify="center"
//       alignItems="center"
//       spacing={3}
//     >
//       <Grid>
//         {" "}
//         <Typography variant="h3" style={{ marginTop: "30px" }}>
//           Sentiment Assessment
//         </Typography>
//         <Grid>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => history.push("/form")}
//             style={{ marginTop: "30px" }}
//           >
//             Start Assessment
//           </Button>
//         </Grid>
//         <h3>
//           Our site uses the{" "}
//           <Link href="https://www.npmjs.com/package/sentiment">sentiment</Link>{" "}
//           module to evaluate user stress levels. To improve accessibility we
//           include speech recognition.
//         </h3>
//         <p>
//           If you are feeling stresed, overwhelmed, or depressed please contact
//           the appropriate health authorities:{" "}
//           <Link href="https://www.government.nl/topics/mental-health-services/question-and-answer/help-for-mental-health-problems">
//             Where can I get help for mental health problems?
//           </Link>
//         </p>
//       </Grid>
//       <Grid
//         container
//         direction="row"
//         justify="center"
//         alignItems="center"
//         spacing={3}
//       >
//         <List>
//           <ListItem>For Alcoholics Anonymous dial: 020 625 6057</ListItem>
//           <ListItem>For Sexual Abuse hotline dial: 0900 899 8411</ListItem>
//           <ListItem>For SOS helpline dial: 0900 0767</ListItem>
//           <ListItem>For ChildLine dial: 0800 0432</ListItem>
//           <ListItem>
//             <Link href="https://access-nl.org/living-netherlands/emergency-numbers-and-other-useful-information/">
//               More information
//             </Link>
//           </ListItem>
//           <ListItem>
//             <Link href="https://www.thehagueinternationalcentre.nl/living-in-the-hague-region/health-care/mental-health">
//               {" "}
//               Even more information
//             </Link>
//           </ListItem>
//         </List>
//       </Grid>
//     </Grid>
//   );
// }
