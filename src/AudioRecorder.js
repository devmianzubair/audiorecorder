import React, { useState } from "react";
import { ReactMic } from "react-mic";
const AudioRecorder = () => {
  const [record, setRecord] = useState(false);
  const [recordedFile, setRecordedFile] = useState();

  const onStop = (recordedBlob) => {
    setRecordedFile(recordedBlob);
    console.log(recordedBlob)
  };
  const onData = (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h1></h1>
      </div>
      <ReactMic
        record={record}
        className="sound-wave"
        onStop={onStop}
        onData={onData}
        visualSetting="sinewave"
        strokeColor="#000000"
        mimeType="audio/wav"
      />
      <div>
        <button
          onClick={() => {
            setRecord(true);
          }}
          type="button"
          style={{ padding: "10px", marginRight: "15px" }}
        >
          Start
        </button>
        <button
          onClick={() => {
            setRecord(false);
          }}
          type="button"
          style={{ padding: "10px" }}
        >
          Stop
        </button>
      </div>
      <div style={{marginTop:'30px'}}>
        {
          recordedFile?<audio controls>
            <source src={recordedFile.blobURL} type="audio/wav"/>
          </audio>
          :""
        }
      </div>
    </div>
  );
};

export default AudioRecorder;
