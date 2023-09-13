import React, { useState } from "react";
import NotepadStyle from "./Notepad.module.css";
import send from "../../../../assets/send.svg";
import back from "../../../../assets/back.svg";
import useNotes from "../../../../hooks/useNotes";

const Notepad = ({ groupID, handleBack }) => {
  const {
    headerValues,
    batchColor,
    noteArray,
    endRef,
    note,
    setNote,
    addNote,
    handleShiftEnter,
  } = useNotes(groupID);
  const [k, setK] = useState(0);

  return (
    <div
      className={NotepadStyle.app}
      style={k ? { minHeight: "5vh", overflowY: "hidden" } : {}}
    >
      <div className={NotepadStyle.header}>
        <div
          className={NotepadStyle.back}
          onClick={handleBack}
          style={{
            height: "fit-content",
            width: "fit-content",
            padding: "0.5rem",
          }}
        >
          <img
            alt="back"
            src={back}
            style={{
              height: "1rem",
              width: "1.5rem",
            }}
          />
        </div>
        <div className={NotepadStyle.avatar} style={batchColor}>
          <h2>{headerValues.avatar}</h2>
        </div>
        <div className={NotepadStyle.title}>
          <h2>&nbsp; {headerValues.title}</h2>
        </div>
      </div>
      <div className={NotepadStyle.contentContainer}>
        {noteArray.map((note) => (
          <div className={NotepadStyle.note} key={note.id}>
            <div className={NotepadStyle.timestamp}>
              <div>
                {note.timestamp.time} &nbsp;{note.timestamp.date}
              </div>
            </div>
            <div className={NotepadStyle.contentDiv}>
              <p>{note.content}</p>
            </div>
          </div>
        ))}
        <br />
        <div ref={endRef} />
      </div>
      <div className={NotepadStyle.inputdiv}>
        <textarea
          placeholder="Enter your text here..........."
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
          onFocus={() => {
            setK(1);
          }}
          onBlur={() => {
            setK(0);
          }}
          onKeyDown={handleShiftEnter}
        />
        <span className={NotepadStyle.send} onClick={addNote}>
          <img
            alt="send"
            style={{
              height: "1.7rem",
              width: "1.7rem",
            }}
            src={send}
          />
        </span>
      </div>
    </div>
  );
};
export default Notepad;
