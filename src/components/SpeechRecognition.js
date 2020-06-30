import React, { useState } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  finalTranscript: PropTypes.string,
  resetTranscript: PropTypes.func,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
};

const Dictaphone = ({
  transcript,
  finalTranscript,
  resetTranscript,
  startListening,
  stopListening,
  browserSupportsSpeechRecognition,
}) => {
  const [newText, setNewText] = useState(true);
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  //   const startRecording = () => {
  //     if (newText) {
  //       startListening();
  //     }
  //   };

  if (newText === true) {
    startListening();
  }

  const stopRecording = () => {
    setNewText(false);
    const text = finalTranscript;
    resetTranscript();
    stopListening();
  };

  return (
    <div>
      {/* <button onClick={startRecording}>Start</button> */}
      <button onClick={stopRecording}>Stop</button>
      <p>{transcript}</p>
    </div>
  );
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);
