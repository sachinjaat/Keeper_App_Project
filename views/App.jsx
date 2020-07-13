import React, { useEffects,useState } from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Note} from "./Note";
import {CreateArea} from "./CreateArea";
import starterNotes from "../Startingnotes.js";
import { Link } from 'react-router-dom';
import axios from "axios"

function App() {
  const [notes, setNotes] = useState(starterNotes);

  function addNote(newNote) {
    console.log("addNote method");
    axios.post('http://localhost:8001',newNote)
       .then(res => console.log(res.data));
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Link to="/">Home</Link>{' '}
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export {App};
