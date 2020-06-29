import React, { useState } from "react";

import { sendSentimentTextThunkCreator } from "../store/sentiment/actions";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

export default function FormPage() {
  const [today, setToday] = useState("");
  const [tomorrow, setTomorrow] = useState("");
  const [life, setLife] = useState("");

  function submitText() {}

  return (
    <div>
      <h1>How are you doing?</h1>
      <form>
        <FormControl>
          <TextField
            label="What did you do today?"
            placeholder="What did you do today?"
            multiline
            variant="filled"
            value={today}
            onChange={(event) => setToday(event.target.value)}
          />
        </FormControl>
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
        <Button onSubmit={submitText}>Submit</Button>
      </form>
    </div>
  );
}
