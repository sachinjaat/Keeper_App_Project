import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";


function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  // useEffect ( () =>{getNotes();},[]);
  //
  // const getNotes = async () => {
  //   const response = await fetch('http://localhost:8001/notes');
  //   const data = response.json();
  //   console.log(data);
  //   console.log(data.title);
  // };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export {Note};
