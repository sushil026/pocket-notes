import React from "react";
import SelectStyle from "./Select.module.css";
const Select = ({ id, title, avatar, batch, selected, selection }) => {
  const slicedTitle = title.slice(0, 20);
  const batchColor = {
    backgroundColor: batch,
  };
  const appStyle = {
    backgroundColor: id === selected ? "#F7ECDC" : "transparent",
  };
  return (
    <div className={SelectStyle.app}>
      <div
        className={SelectStyle.main}
        onClick={() => selection(id)}
        style={appStyle}
      >
        <div className={SelectStyle.avatar} style={batchColor}>
          <p>{avatar.toUpperCase()}</p>
        </div>
        <div className={SelectStyle.title}>
          <h3>{title.length > 20 ? slicedTitle + "..." : title}</h3>
        </div>
      </div>
    </div>
  );
};
export default Select;
