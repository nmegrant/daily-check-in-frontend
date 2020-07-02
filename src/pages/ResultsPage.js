import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectSentiment, selectHistory } from "../store/sentiment/selectors";
import { getSentimentHistoryThunkCreator } from "../store/sentiment/actions";

import { Button } from "@material-ui/core";
import { AreaGraph, BarGraph } from "../components/graph";

export default function ResultsPage() {
  const dispatch = useDispatch();

  function getHistory(event) {
    event.preventDefault();
    dispatch(getSentimentHistoryThunkCreator());
  }

  const history = useSelector(selectHistory());
  const sentimentHistory = history.map((s, i) => ({
    ...s,
    day: new Date(s.createdAt).getDate(),
  }));

  const sentimentScore = useSelector(selectSentiment());
  return (
    <div>
      <h1>Results</h1>
      <h1>{sentimentScore}</h1>
      <BarGraph
        score={sentimentScore}
        min={-5}
        max={5}
        ticks={[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]}
      />
      <Button variant="contained" color="primary" onClick={getHistory}>
        See History
      </Button>
      {history.length ? (
        <AreaGraph
          data={sentimentHistory}
          min={-5}
          max={5}
          primary_key={"score"}
          x_dataKey={"day"}
          x_label={"Date"}
          y_label={"Score"}
          secondary_key={"comparativeScore"}
          showSecondaryDataAsLine={true}
          duotone={true}
          y_ticks={[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]}
        />
      ) : null}
    </div>
  );
}
