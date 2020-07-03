import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendSentimentTextThunkCreator } from "../store/sentiment/actions";
import FormInputSpeech from "../components/FormInputSpeech";
import { showMessageThunkCreator } from "../store/appstate/actions";

// import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { selectTheme } from "../store/appstate/selectors";
import { colorScheme } from '../components/ColorScheme';
import { lightTheme } from "../components/Themes";

const initialValues = { today: "", tomorrow: "", life: "" };
const initialMics = { today: false, tomorrow: false, life: false };

export default function FormPage() {
  const [values, setValues] = useState(initialValues);
  const [mics, setMics] = useState(initialMics);
  const dispatch = useDispatch();
  const history = useHistory();
  const theme = useSelector(selectTheme);
  console.log(theme)
  const submitForm = () => {
    const { today, tomorrow, life } = values;
    if (today.length === 0 || tomorrow.length === 0 || life.length === 0) {
      dispatch(
        showMessageThunkCreator("Please fill in all form fields", "error")
      );
    } else {
      dispatch(sendSentimentTextThunkCreator(today, tomorrow, life));
      setValues(initialValues);
      history.push("/results");
    }
  };

  return (
    <Container> 
    <Title>How are you doing?</Title>
    <FormWrapper theme={theme}>
      <FormInputSpeech
        name={"today"}
        label={"What did you do today?"}
        values={values}
        setValues={setValues}
        mics={mics}
        setMics={setMics}
        initialMics={initialMics}
        styleFormControl={{ width: "65%" }}
      />
      <FormInputSpeech
        name={"tomorrow"}
        label={"What do you plan to do tomorrow?"}
        values={values}
        setValues={setValues}
        mics={mics}
        setMics={setMics}
        initialMics={initialMics}
        styleFormControl={{ width: "65%" }}
      />
      <FormInputSpeech
        name={"life"}
        label={"How do you feel about your life right now?"}
        values={values}
        setValues={setValues}
        mics={mics}
        setMics={setMics}
        initialMics={initialMics}
        styleFormControl={{ width: "65%" }}
      />
    </FormWrapper>

    <Button onClick={submitForm} theme={theme}>
      Submit
    </Button>
   
    </Container>
  );
}

export const Button = styled.div`
 padding: 0.5rem 3rem;
 /* border: 0.16em solid ${props => props.theme === 'dark' ? colorScheme.quaternaryColor : lightTheme.text}; */
 border: 0.16em solid ${colorScheme.quaternaryColor};
 
margin: 3rem 0 0 0;
box-sizing: border-box;
text-decoration: none;
text-transform: uppercase;
font-weight: 400;
text-align: center;
/* color: ${props => props.theme === 'dark' ? colorScheme.quaternaryColor : lightTheme.text}; */
color: ${colorScheme.quaternaryColor};
cursor: pointer;
user-select: none;
font-size: ${props => props.fontSize || '2rem'};


background-color: rgba(255,255,255,0);
transform: scale(1);
transition: background-color, transform, 0.2s ease;
:hover {
  background-color: rgba(255,255,255,1);
}
:active {
  transform: scale(0.9);
}
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 5rem;
  user-select: none;
  margin: 0 0 3rem 0;

  /* color: ${colorScheme.tertiaryColor}; */
  
`

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    margin: 0.5rem 0;

    

    label {
      color: ${props => props.theme === 'dark' ? lightTheme.text : undefined};
      font-size: 1.75rem;
      z-index: 500;
      /* margin-top: 0.5rem; */

      &.Mui-focused {
        /* border: 3px solid gold; */
        /* color: ${props => props.theme === 'dark' ? 'red' : 'inherit'}; */
        color: ${colorScheme.quaternaryColor};
        /* color: ${props => props.theme === 'dark' ? colorScheme.quaternaryColor : colorScheme.tertiaryColor}; */
      }
    }

    div.MuiFilledInput-root {
      background-color: rgba(255,255,255,0.9);
      /* background-color: ${props => props.theme === 'dark' ? 'rgba(255,255,255,0.9)' : undefined}; */
      
      /* z-index: -1; */
    }

    .MuiFilledInput-underline:after {
      border-color: ${colorScheme.quaternaryColor};
      /* border-color: ${props => props.theme === 'dark' ? colorScheme.quaternaryColor : colorScheme.tertiaryColor}; */
    }

    textarea {
      margin-top: 1rem;
      font-size: 1.25rem;
    }
  }

`