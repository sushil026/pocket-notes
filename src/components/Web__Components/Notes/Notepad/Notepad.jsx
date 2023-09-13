import React from "react";
import NotepadStyle from "./Notepad.module.css";
import send from "../../../../assets/send.svg";
import useNotes from "../../../../hooks/useNotes";

const Notepad = ({ groupID }) => {
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

  return (
    <div className={NotepadStyle.app}>
      <div className={NotepadStyle.header}>
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
                {note.timestamp.time}
                <br />
                {note.timestamp.date}
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
          onKeyDown={handleShiftEnter}
        />
        <span className={NotepadStyle.send} onClick={addNote}>
          <img alt="send"  src={send} />
        </span>
      </div>
    </div>
  );
};
export default Notepad;
