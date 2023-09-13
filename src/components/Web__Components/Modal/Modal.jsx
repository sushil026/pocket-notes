import React from "react";
import ModalStyle from "./Modal.module.css";
import useAddGroup from "../../../hooks/useAddGroup";

const Modal = ({ closeModal }) => {
  const colors = [
    { id: 1, hexCode: "#B38BFA" },
    { id: 2, hexCode: "#FF79F2" },
    { id: 3, hexCode: "#43E6FC" },
    { id: 4, hexCode: "#F19576" },
    { id: 5, hexCode: "#0047FF" },
    { id: 6, hexCode: "#6691FF" },
  ];

  const grps = JSON.parse(localStorage.getItem("noteGroups")) || [];

  const {  setName, setCol, error, setError, createGrp } =
    useAddGroup(closeModal);

  const clickedOutside = () => {
    closeModal();
  };

  return (
    <div className={ModalStyle.app}>
      <div className={ModalStyle.shadow} onClick={clickedOutside}></div>

      <div className={ModalStyle.container}>
        <span>
          <p>Create New Notes group</p>
        </span>
        <span>
          <p>Group Name</p>
          <input
            type="text"
            name="grpName"
            placeholder="Enter your group name...."
            onChange={(e) => {
              const val = e.target.value;
              setName(val);
              setError(grps.some((grp) => grp.name === val));
            }}
          />
        </span>
        {error ? (
          <p style={{ color: "red", fontSize: "0.9rem", fontWeight: "400" }}>
            Group already exists
          </p>
        ) : (
          ""
        )}
        <span>
          <p>Choose Color</p>
          {colors.map((buttonColor) => (
            <label
              key={buttonColor.id}
              className={ModalStyle.customRadioButton}
            >
              <input
                type="radio"
                name="color"
                value={buttonColor.hexCode}
                className={ModalStyle.col}
                onChange={() => setCol(buttonColor.hexCode)}
              />
              <div
                className={ModalStyle.customRadioFill}
                style={{ backgroundColor: buttonColor.hexCode }}
              ></div>
            </label>
          ))}
        </span>
        <div onClick={createGrp} className={ModalStyle.button}>
          <p>Create</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
