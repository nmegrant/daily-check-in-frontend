import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectSentiment, selectHistory } from "../store/sentiment/selectors";
import { getSentimentHistoryThunkCreator } from "../store/sentiment/actions";

// import { Button } from "@material-ui/core";
import { AreaGraph, BarGraph } from "../components/graph";
import styled from "styled-components";
import { Button } from "./FormPage";
// import { lightTheme } from "../components/Themes";

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
    <>
      <Title>Your result {sentimentScore}</Title>
      <Wrapper>
        <BarGraph
          graphId="userResult"
          score={sentimentScore}
          min={-5}
          max={5}
          ticks={[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]}
        />
      </Wrapper>
          <Button onClick={getHistory} style={{marginTop: '2rem'}}>
            See History
          </Button>
      {history.length ? (
        <HistoryWrapper>
          <AreaGraph
            graphId="resultGraph"
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
          </HistoryWrapper>
          ) : null}
    </>
  );
}
const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  margin-top: 5rem;
`
const Wrapper = styled.div`
  width: 100%;
  max-width: 700px;
  /* border: 3px solid red; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background-color: white;
  border-radius: 0.25rem;

  color: #363537;

  box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
  
` 
const HistoryWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  /* border: 3px solid red; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background-color: white;
  border-radius: 0.25rem;
    box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
    color: #363537;

    margin-top: 2rem;

    margin-bottom: 3rem;
` 