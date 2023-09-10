import React from "react";
import NotepadStyle from "./Notepad.module.css";
import send from "../../../assets/send.svg";
import Content from "../Content/Content";

export default function Notepad() {
  return (
    <div className={NotepadStyle.app}>
      <div className={NotepadStyle.header}>
        <div className={NotepadStyle.avatar}>
          <h2>CU</h2>
        </div>
        <div className={NotepadStyle.title}>
          <h2>&nbsp; Hello</h2>
        </div>
      </div>
      <div className={NotepadStyle.contentContainer}>
        <Content/>
        <Content/>
        <Content/>
        <Content/>
        <Content/>
        <Content/>
        <Content/>
        <Content/>
        <Content/>
      </div>
      <div className={NotepadStyle.inputdiv}>
        <textarea placeholder="Enter your text here...........">
        </textarea>
        <span className={NotepadStyle.send}>
          <img src={send}/>
        </span>
      </div>
    </div>
  );
}
