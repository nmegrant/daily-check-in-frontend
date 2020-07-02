import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendSentimentTextThunkCreator } from "../store/sentiment/actions";
import FormInputSpeech from "../components/FormInputSpeech";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const initialValues = { today: "", tomorrow: "", life: "" };
const initialMics = { today: false, tomorrow: false, life: false };

export default function FormPage() {
  const [values, setValues] = useState(initialValues);
  const [mics, setMics] = useState(initialMics);
  const dispatch = useDispatch();
  const history = useHistory();

  const submitForm = () => {
    const { today, tomorrow, life } = values;
    console.log(`today: ${today} \t tomorrow: ${tomorrow} \t life: ${life}`);
    dispatch(sendSentimentTextThunkCreator(today, tomorrow, life));
    setValues(initialValues);
    history.push("/results");
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item style={{ width: "100%" }}>
        <h1>How are you doing?</h1>
        <form>
          <Grid
            container
            direction="column"
            alignContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item style={{ width: "100%" }}>
              <FormInputSpeech
                name={"today"}
                label={"What did you do today?"}
                values={values}
                setValues={setValues}
                mics={mics}
                setMics={setMics}
                initialMics={initialMics}
                styleFormControl={{ width: "55%" }}
              />
            </Grid>
            <Grid item style={{ width: "100%" }}>
              <FormInputSpeech
                name={"tomorrow"}
                label={"What do you plan to do tomorrow?"}
                values={values}
                setValues={setValues}
                mics={mics}
                setMics={setMics}
                initialMics={initialMics}
                styleFormControl={{ width: "55%" }}
              />
            </Grid>
            <Grid item style={{ width: "100%" }}>
              <FormInputSpeech
                name={"life"}
                label={"How do you feel about your life right now?"}
                values={values}
                setValues={setValues}
                mics={mics}
                setMics={setMics}
                initialMics={initialMics}
                styleFormControl={{ width: "55%" }}
              />
            </Grid>
            <Button onClick={submitForm} color="primary" variant="contained">
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
