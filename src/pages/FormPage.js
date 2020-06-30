import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { sendSentimentTextThunkCreator } from "../store/sentiment/actions";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import SpeechRecognition from "../components/SpeechRecognition";
import { textSelector } from "../store/text/selectors";

export default function FormPage() {
  const text = useSelector(textSelector());

  const [today, setToday] = useState("");
  const [tomorrow, setTomorrow] = useState("");
  const [life, setLife] = useState("");
  const [fieldFocus, setFieldFocus] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (fieldFocus === "today") {
      setToday(text);
    }
    if (fieldFocus === "tomorrow") {
      setTomorrow(text);
    }
    if (fieldFocus === "life") {
      setLife(text);
    }
  }, [text]);

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
            <p>
              Feel like talking? To use the speech recognition do the following:
            </p>
            <ol>
              <li>Click Start to begin recording.</li>
              <li>Talk away . . . </li>
              <li>Click the box you want your text to appear in.</li>
              <li>Click stop</li>
            </ol>
            <SpeechRecognition />
            <Grid item>
              <FormControl>
                <TextField
                  onFocus={() => setFieldFocus("today")}
                  label="What did you do today?"
                  placeholder="What did you do today?"
                  multiline
                  variant="filled"
                  value={today}
                  onChange={(event) => setToday(event.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <TextField
                  onFocus={() => setFieldFocus("tomorrow")}
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
                  onFocus={() => setFieldFocus("life")}
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
