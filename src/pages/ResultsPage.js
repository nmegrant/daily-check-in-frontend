import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectSentiment, selectHistory } from "../store/sentiment/selectors";
import { getSentimentHistoryThunkCreator } from "../store/sentiment/actions";

import { Button } from "@material-ui/core";

export default function ResultsPage() {
  const dispatch = useDispatch();

  function getHistory(event) {
    event.preventDefault();
    dispatch(getSentimentHistoryThunkCreator());
  }

  const history = useSelector(selectHistory());
  console.log(history);

  const sentimentScore = useSelector(selectSentiment());
  return (
    <div>
      <h1>Results</h1>
      <h1>{sentimentScore}</h1>
      <Button variant="contained" color="primary" onClick={getHistory}>
        See History
      </Button>
      {history
        ? history.map((i) => {
            return <p key={i.id}>{i.score}</p>;
          })
        : null}
    </div>
  );
}
