import React, { useState } from "react";
import "./Note.css";

const AddNote = ({ saveClick }) => {
  const [noteText, setNoteText] = useState("");

  const characLimit = 200;

  const textAreaHandler = (e) => {
    if (characLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const saveHandler = () => {
    if (noteText.trim().length > 0) {
      saveClick({ text: noteText, date: "04/08/22", id: Math.random() * 1000 });
    }

    setNoteText("");
  };

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="type to add a note"
        value={noteText}
        onChange={textAreaHandler}
      ></textarea>
      <div className="note-footer">
        <small>{characLimit - noteText.length} remaining</small>
        <button className="save" onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
