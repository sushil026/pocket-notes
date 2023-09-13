import React from "react";
import notes from "./Notes.module.css";
import Notepad from "./Notepad/Notepad";

const Notes = ({ groupID, handleBack }) => {
  return (
    <div className={notes.app}>
      <Notepad groupID={groupID} handleBack={handleBack} />
    </div>
  );
};
export default Notes;
