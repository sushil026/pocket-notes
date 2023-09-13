import { useState, useEffect, useRef } from "react";

const useNotes = (groupID) => {
  const [headerValues, setHeaderValues] = useState({
    avatar: "",
    title: "",
    note: [],
  });
  const [batchColor, setBatchColor] = useState({});
  const [noteArray, setNoteArray] = useState([]);
  const [note, setNote] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView();
  }, [noteArray]);

  useEffect(() => {
    const groups = JSON.parse(localStorage.getItem("noteGroups")) || [];
    const currentGroup = groups.find((grp) => grp.id === groupID);
    if (currentGroup) {
      setHeaderValues({
        avatar: currentGroup.avatar.toUpperCase(),
        title: currentGroup.name,
        note: currentGroup.notes || [],
      });
      setBatchColor({
        backgroundColor: currentGroup.color,
      });
      setNoteArray(currentGroup.notes);
    }
  }, [groupID]);

  const addNote = () => {
    if (note && !/^\s*$/.test(note)) {
      const dt = getFullDate();
      const tm = get12HourTime();
      const groups = JSON.parse(localStorage.getItem("noteGroups")) || [];
      const addedNote = groups.map((grp) => {
        if (grp.id === groupID) {
          const existing = Array.isArray(grp.notes) ? grp.notes : [];
          let noteId =
            existing.length > 0
              ? Math.max(...existing.map((notes) => notes.id)) + 1
              : 1;
          const newNote = {
            id: noteId,
            content: note,
            timestamp: {
              date: dt,
              time: tm,
            },
          };
          return {
            ...grp,
            notes: [...existing, newNote],
          };
        }
        return grp;
      });
      localStorage.setItem("noteGroups", JSON.stringify(addedNote));
      setNoteArray([
        ...noteArray,
        {
          id: addedNote[0].notes[addedNote[0].notes.length - 1].id,
          content: note,
          timestamp: {
            date: dt,
            time: tm,
          },
        },
      ]);
    }
    setNote("");
  };

  const getFullDate = () => {
    const now = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const year = now.getFullYear();
    const month = months[now.getMonth()];
    const day = String(now.getDate()).padStart(2, "0");
    return `${day} ${month}, ${year}`;
  };

  const get12HourTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const am = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )} ${am}`;
  };

  const handleShiftEnter = (e) => {
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      setNote(note + "\n");
    }
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      addNote();
    }
  };

  return {
    headerValues,
    batchColor,
    noteArray,
    endRef,
    note,
    setNote,
    addNote,
    handleShiftEnter,
  };
};

export default useNotes;
