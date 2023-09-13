import React from "react";
import MenuStyle from "./Menu.module.css"
import Select from "./Select/Select";

const Menu = ({ openModal, selection }) => {
  const groups = JSON.parse(localStorage.getItem("noteGroups"));
  const handleSelect = (id) => {
    selection(id);
  };
  return (
    <div className={MenuStyle.main}>
      <div className={MenuStyle.header}>
        <div className={MenuStyle.logo}>
          <h2>Pocket Notes</h2>
        </div>
        <br />
        <div className={MenuStyle.button}>
          <div className={MenuStyle.buttonContent} onClick={openModal}>
            <span className="material-symbols-outlined">add</span>
            <p>&nbsp;Create Notes Group</p>
          </div>
        </div>
      </div>

      <div className={MenuStyle.grps}>
        <div className={MenuStyle.grpContainer}>
          {groups.map((grp) => (
            <Select
              key={grp.id}
              id={grp.id}
              title={grp.name}
              avatar={grp.avatar}
              batch={grp.color}
              selection={handleSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Menu;
