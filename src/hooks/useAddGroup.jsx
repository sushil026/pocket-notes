import { useState } from "react";

const useAddGroup = (closeModal) => {
  const [grpName, setName] = useState("");
  const [grpCol, setCol] = useState("");
  const [error, setError] = useState(0);

  let grps = JSON.parse(localStorage.getItem("noteGroups"));
  if (!grps) {
    grps = [];
  }
  const avatarGen = (name) => {
    const words = name.split(" ");
    let result = "";
    if (words.length === 1) {
      const firstWord = words[0];
      result += firstWord.slice(0, 2);
    }
    if (words.length >= 2) {
      const firstWord = words[0];
      result += firstWord.slice(0, 1);
      const secondWord = words[1];
      result += secondWord.slice(0, 1);
    }
    return result;
  };
  const createGrp = () => {
    if (grpName.length && grpCol.length && !error) {
      addNewGroup();
    }
    closeModal();
  };
  const addNewGroup = () => {
    let avatarVal = avatarGen(grpName);
    let currentId =
      grps.length > 0 ? Math.max(...grps.map((grps) => grps.id)) + 1 : 1;
    const groupData = {
      id: currentId,
      name: grpName,
      color: grpCol,
      avatar: avatarVal,
      notes: [],
    };
    grps.push(groupData);
    localStorage.setItem("noteGroups", JSON.stringify(grps));
  };
  return {
    setName,
    setCol,
    error,
    setError,
    createGrp,
  };
};

export default useAddGroup;
