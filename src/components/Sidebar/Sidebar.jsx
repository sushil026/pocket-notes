import React from "react";
import SidebarStyle from "./Sidebar.module.css";
import CreateGroup from "./CreateGroup/CreateGroup";
import Select from "./Select/Select";

export default function Sidebar() {
  const groups = JSON.parse(localStorage.getItem("groupArray"));
  // const groups = ["group1", "group2"];
  return (
    <div className={SidebarStyle.main}>
      <div className={SidebarStyle.logo}>
        <h2>Pocket Notes</h2>
      </div>
      <br />
      <CreateGroup />

      <div className={SidebarStyle.grps}>
        {groups.map((grp) => (
          <Select title={grp} />
        ))}
      </div>
    </div>
  );
}
