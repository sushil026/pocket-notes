import React, { useState } from "react";
import style from "./MobileView.module.css";
import Modal from "../components/Mobile__Components/Modal/Modal";
import Notes from "../components/Mobile__Components/Notes/Notes";
import Menu from "../components/Mobile__Components/Menu/Menu";

const MobileView = () => {
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
  const handleBack = () => {
    setGroup(0);
  };

  return (
    <div className={style.App}>
      <Menu openModal={openModal} selection={selection} />
      {selectedGroupID ? (
        <Notes groupID={selectedGroupID} handleBack={handleBack} />
      ) : (
        ""
      )}
      {isOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};
export default MobileView;
