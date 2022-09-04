import React, { Fragment, useState } from "react";
import "./NoteList.css";

import AddNote from "./AddNote";

import Note from "./Note";
import Search from "./Search";

const NoteList = () => {
  const [notes, setNotes] = useState([
    {
      id: Math.random() * 1000,
      text: "Welcome to the Notes App",
    },
    {
      id: Math.random() * 1000,
      text: "This is the prototype of the real world notes application. Here you can type, add and delete the notes however you like. It also comes with this nice notes",
    },
    {
      id: Math.random() * 1000,
      text: "Thank you so much for viewing my project",
    },
  ]);

  const saveClick = (note) => {
    const newNote = [...notes, note];
    setNotes(newNote);
  };

  const [searchText, setSearchText] = useState("");

  const deleteNote = (id) => {
    const rmNote = notes.filter((el) => el.id !== id);
    setNotes(rmNote);
  };

  return (
    <Fragment>
      <Search searchHandler={setSearchText} />
      <div className="notes-list">
        <Note
          notes={notes.filter((el) =>
            el.text.toLowerCase().includes(searchText)
          )}
          deleteNote={deleteNote}
        />
        <AddNote saveClick={saveClick} />
      </div>
    </Fragment>
  );
};

export default NoteList;
