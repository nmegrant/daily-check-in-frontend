import React from "react";
import { useHistory, Link as BrowserLink } from "react-router-dom";

import {
  Typography,
  Grid,
  Button,
  Link,
  List,
  ListItem,
} from "@material-ui/core";

export default function Homepage() {
  const history = useHistory();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <BrowserLink exact to="/admin">
        go to admin
      </BrowserLink>
      <Grid>
        {" "}
        <Typography variant="h3" style={{ marginTop: "30px" }}>
          Sentiment Assessment
        </Typography>
        <Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/form")}
            style={{ marginTop: "30px" }}
          >
            Start Assessment
          </Button>
        </Grid>
        <h3>
          Our site uses the{" "}
          <Link href="https://www.npmjs.com/package/sentiment">sentiment</Link>{" "}
          module to evaluate user stress levels. To improve accessibility we
          include speech recognition.
        </h3>
        <p>
          If you are feeling stresed, overwhelmed, or depressed please contact
          the appropriate health authorities:{" "}
          <Link href="https://www.government.nl/topics/mental-health-services/question-and-answer/help-for-mental-health-problems">
            Where can I get help for mental health problems?
          </Link>
        </p>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <List>
          <ListItem>For Alcoholics Anonymous dial: 020 625 6057</ListItem>
          <ListItem>For Sexual Abuse hotline dial: 0900 899 8411</ListItem>
          <ListItem>For SOS helpline dial: 0900 0767</ListItem>
          <ListItem>For ChildLine dial: 0800 0432</ListItem>
          <ListItem>
            <Link href="https://access-nl.org/living-netherlands/emergency-numbers-and-other-useful-information/">
              More information
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.thehagueinternationalcentre.nl/living-in-the-hague-region/health-care/mental-health">
              {" "}
              Even more information
            </Link>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
