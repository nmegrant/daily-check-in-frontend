import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { sendSentimentTextThunkCreator } from "../store/sentiment/actions";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import SpeechRecognition from "../components/SpeechRecognition";

export default function FormPage() {
  const [today, setToday] = useState("");
  const [tomorrow, setTomorrow] = useState("");
  const [life, setLife] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const [record, setRecord] = useState(null);

  function submitText() {
    dispatch(sendSentimentTextThunkCreator(today, tomorrow, life));
    setToday("");
    setTomorrow("");
    setLife("");
    history.push("/results");
  }

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item>
        <h1>How are you doing?</h1>
        <form>
          <Grid
            container
            direction="column"
            alignContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item>
              <FormControl>
                <TextField
                  label="What did you do today?"
                  placeholder="What did you do today?"
                  multiline
                  variant="filled"
                  value={today}
                  onChange={(event) => setToday(event.target.value)}
                />
                <div>
                  {record === null ? (
                    // <Button
                    //   onClick={() => (
                    //     <div>
                    <SpeechRecognition />
                  ) : //     </div>
                  //   )}
                  // >
                  //   Start Recording
                  // </Button>
                  null}
                </div>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <TextField
                  label="What do you plan to do tomorrow?"
                  placeholder="What do you plan to do tomorrow?"
                  multiline
                  variant="filled"
                  value={tomorrow}
                  onChange={(event) => setTomorrow(event.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <TextField
                  label="How do you feel about your life right now?"
                  placeholder="How do you feel about your life right now?"
                  multiline
                  variant="filled"
                  value={life}
                  onChange={(event) => setLife(event.target.value)}
                />
              </FormControl>
            </Grid>
            <Button onClick={submitText} color="primary" variant="contained">
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
