import React, { useState } from "react";
import style from "./WebView.module.css";
import Modal from "../components/Web__Components/Modal/Modal";
import Notes from "../components/Web__Components/Notes/Notes";
import Sidebar from "../components/Web__Components/Sidebar/Sidebar";

const WebView = () => {
  if (!JSON.parse(localStorage.getItem("noteGroups"))) {
    let noteGroups = [];
    localStorage.setItem("noteGroups", JSON.stringify(noteGroups));
  }

  const [isOpen, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const [selectedGroupID, setGroup] = useState(0);
  const selection = (val) => {
    setGroup(val);
  };

  return (
    <div className={style.App}>
      <Sidebar openModal={openModal} selection={selection} />
      <Notes groupID={selectedGroupID} />
      {isOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};
export default WebView;
