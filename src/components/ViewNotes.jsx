import React, { useEffect ,useState } from "react";
// import {Header} from "./Header";
import Nav from "./Nav";
import {Footer} from "./Footer";
import {Note} from "./Note";
import {NoteArray} from "./Addnote";
import { Link } from 'react-router-dom';
import Axios from "axios";



function ViewNotes() {
   const [noteArray, setNotes] = useState(NoteArray);

  function deleteNote(id) {
    Axios.delete('http://localhost:5000/notes/' + id)
     .then(res => console.log("Note Deleted"));
    setNotes(prevNotes => {
      return prevNotes.filter(noteItem => noteItem._id != id)
    })
    }

  useEffect( () => {
    Axios.get(`http://localhost:5000/notes`).then(response => setNotes(response.data));
  },[]);

  return (
    <div>
     {noteArray.map((noteItem, index) => {
      return (
        <Note
          key={index}
          id={noteItem._id}
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


export {ViewNotes};
