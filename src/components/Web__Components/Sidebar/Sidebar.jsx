import React, { useState } from "react";
import SidebarStyle from "./Sidebar.module.css";
import Select from "./Select/Select";

const Sidebar = ({ openModal, selection }) => {
  const groups = JSON.parse(localStorage.getItem("noteGroups"));
  const [grpSelected, setGrpSelected] = useState(0);
  const handleSelect = (id) => {
    selection(id);
    setGrpSelected(id);
  };
  return (
    <div className={SidebarStyle.main}>
      <div className={SidebarStyle.logo}>
        <h2>Pocket Notes</h2>
      </div>
      <br />

      <div className={SidebarStyle.button}>
        <div className={SidebarStyle.buttonContent} onClick={openModal}>
          <span className="material-symbols-outlined">add</span>
          <p>&nbsp;Create Notes Group</p>
        </div>
      </div>

      <div className={SidebarStyle.grps}>
        {groups.map((grp) => (
          <Select
            key={grp.id}
            id={grp.id}
            title={grp.name}
            avatar={grp.avatar}
            batch={grp.color}
            selected={grpSelected}
            selection={handleSelect}
          />
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
