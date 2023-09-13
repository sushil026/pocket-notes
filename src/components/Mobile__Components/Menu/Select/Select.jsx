import React from "react";
import SelectStyle from "./Select.module.css";
const Select = ({ id, title, avatar, batch, selection }) => {
  const slicedTitle = title.slice(0, 20);

  const batchColor = {
    backgroundColor: batch,
  };
  return (
    <div className={SelectStyle.app}>
      <div className={SelectStyle.main} onClick={() => selection(id)}>
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
