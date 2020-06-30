import React from "react";
import { useSelector } from "react-redux";

import { selectSentiment } from "../store/sentiment/selectors";

import { Button } from "@material-ui/core";

export default function ResultsPage() {
  const sentimentScore = useSelector(selectSentiment());
  console.log(sentimentScore);
  return (
    <div>
      <h1>Results</h1>
      <h1>{sentimentScore}</h1>
      <Button variant="contained" color="primary">
        See History
      </Button>
    </div>
  );
}
