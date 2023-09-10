import React from "react";
import create from "./CreateGroup.module.css"

export default function CreateGroup() {
  return (
    <div className={create.app}>
      <div className={create.main}>
      <span className="material-symbols-outlined">add</span>
      <h3>&nbsp;Create Notes Group</h3>
      </div>
    </div>
  );
}
