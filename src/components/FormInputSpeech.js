import React, { useRef } from "react";
import { useSpeechRecognition } from "react-speech-kit";

import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Tooltip from "@material-ui/core/Tooltip";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";

const useStyles = makeStyles({
  inputField: {
    padding: "5%",
  },
  inputLabel: {
    padding: "2%",
  },
});

export default function FormInputSpeech(props) {
  const classes = useStyles();
  const buffer = useRef("");
  const { listen, listening, stop, supported } = useSpeechRecognition({
    onResult: (result) => {
      buffer.current = result;
    },
  });

  const handleChange = (prop) => (event) => {
    props.setValues({
      ...props.values,
      [props.name]: event.target.value,
    });
  };

  const handleMic = (ref, prop) => () => {
    props.setMics({
      ...props.initialMics,
      [props.name]: !props.mics[props.name],
    });
    if (listening) {
      //delay stop recording for 250ms to also pick up end of sentence
      setTimeout(() => {
        stop();
        props.setValues({ ...props.values, [props.name]: buffer.current });
        buffer.current = "";
      }, 250);
    } else {
      listen();
    }
  };

  return (
    <div>
      <FormControl style={props.styleFormControl}>
        <InputLabel htmlFor={props.name} className={classes.inputLabel}>
          What did you do today?
        </InputLabel>
        <FilledInput
          id={props.name}
          type="text"
          multiline
          className={classes.inputField}
          value={props.values[props.name]}
          onChange={handleChange(props.name)}
          endAdornment={
            supported ? (
              <Tooltip title="Keep pressed and speak" placement="right-end">
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle-mic"
                    onMouseDown={handleMic(props.name)}
                    onMouseUp={handleMic(props.name)}
                    edge="end"
                  >
                    {props.mics[props.name] ? <MicIcon /> : <MicOffIcon />}
                  </IconButton>
                </InputAdornment>
              </Tooltip>
            ) : null
          }
        ></FilledInput>
      </FormControl>
    </div>
  );
}
