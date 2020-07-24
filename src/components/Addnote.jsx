import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

import {Footer} from "./Footer";
// import Nav from "./Nav";
import Axios from "axios";


let NoteArray = [];
function Addnote(/*props*/) {
  let [Notes, setNotes] = useState([]);
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });



  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  const submitNote =  async e  => {
      setNote({
        ...note
      })
       setNotes(prevNotes => {
         return [...prevNotes, note];
       });

       try {
         await Axios.post('http://localhost:5000',note)
        setNote({
            ...note,
            title: '',
            content:''
        });
        window.location = '/notes';
      } catch (error) {
        console.log(error);
      }
       e.preventDefault();
    }


  NoteArray = [...Notes];

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
      <Footer />
    </div>
  );
}

export {NoteArray, Addnote};
