import React from "react";
import notes from "./Notes.module.css";
import SplashScreen from "./SplashScreen/SplashScreen";
import Notepad from "./Notepad/Notepad";

const Notes = ({ groupID }) => {
  return (
    <div className={notes.app}>
      {groupID === 0 ? <SplashScreen /> : <Notepad groupID={groupID} />}
    </div>
  );
};
export default Notes;
