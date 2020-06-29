import React from "react";
import { useHistory } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";

export default function Homepage() {
  const history = useHistory();
  return (
    <Box>
      {" "}
      <h1>Sentiment Assessment</h1>
      <h3>
        Our site uses the{" "}
        <Link href="#https://www.npmjs.com/package/sentiment">sentiment</Link>{" "}
        module to evaluate user stress levels. To improve accessibility we
        include speech recognition.
      </h3>
      <p>
        If you are feeling stresed, overwhelmed, or depressed please contact the
        appropriate health authorities:{" "}
        <Link href="#https://www.government.nl/topics/mental-health-services/question-and-answer/help-for-mental-health-problems">
          Where can I get help for mental health problems?
        </Link>
      </p>
      <List>
        <ListItem>For Alcoholics Anonymous dial: 020 625 6057</ListItem>
        <ListItem>For Sexual Abuse hotline dial: 0900 899 8411</ListItem>
        <ListItem>For SOS helpline dial: 0900 0767</ListItem>
        <ListItem>For ChildLine dial: 0800 0432</ListItem>
      </List>
      <Button onClick={() => history.push("/form")}>
        Go to Evaluation Form
      </Button>
    </Box>
  );
}
