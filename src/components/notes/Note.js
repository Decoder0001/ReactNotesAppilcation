import React, { Fragment } from "react";
import "./Note.css";

const Note = ({ notes, deleteNote }) => {
  const showDate = new Date().toLocaleDateString();

  const renderNotes = notes.map((n, i) => {
    return (
      <div className="note" key={i}>
        <span>{n.text}</span>
        <div className="note-footer">
          <small>{showDate}</small>
          <i
            className="fa-solid fa-trash-can"
            onClick={() => deleteNote(n.id)}
          ></i>
        </div>
      </div>
    );
  });

  return <Fragment>{renderNotes}</Fragment>;
};

export default Note;
