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

  const { setName, setCol, error, setError, createGrp } = useAddGroup(closeModal);

  const grps = JSON.parse(localStorage.getItem("noteGroups")) || [];

  const clickedOutside = () => {
    closeModal();
  };

  return (
    <div className={ModalStyle.app}>
      <div className={ModalStyle.shadow} onClick={clickedOutside}></div>
      <div className={ModalStyle.container}>
        <div className={ModalStyle.containerHolder}>
          <span className={ModalStyle.title}>Create New Notes group</span>
          <span className={ModalStyle.containerElement}>
            <p className={ModalStyle.labels}>Group Name</p>
            <input
              className={ModalStyle.grpName}
              type="text"
              name="grpName"
              placeholder="Enter your group name...."
              onChange={(e) => {
                const val = e.target.value;
                setError(grps.some((grps) => grps.name === val));
                setName(val);
              }}
            />
            {error ? (
              <p
                style={{ color: "red", fontSize: "0.9rem", fontWeight: "400" }}
              >
                Group already exists
              </p>
            ) : (
              ""
            )}
          </span>
          <span className={ModalStyle.colorSelect}>
            <p className={ModalStyle.labels}>Choose Color</p>
            <div className={ModalStyle.palette}>
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
            </div>
          </span>
        </div>
        <div onClick={createGrp} className={ModalStyle.button}>
          <p>Create</p>
        </div>
      </div>
    </div>
  );
};
export default Modal;
