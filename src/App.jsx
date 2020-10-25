import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useStateValue } from "./stateProvider";
import Login from "./Login";
import db from "./firebase";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [{ user }, dispatch] = useStateValue();


  useEffect(() => {
    if (user) {
      const unsubscribe = db.collection('users').doc(`${user.uid}`).collection('notes').onSnapshot(snapshot => (
        setNotes(snapshot.docs.map((doc) => ({
          // id: doc.id,
          title: doc.data().title,
          content: doc.data().content
        })))    
      ));
      return () => {
        unsubscribe();
      };
    }
  }, [user])

  function deleteNote(title) {
    db.collection('users').doc(`${user.uid}`).collection('notes').doc(`${title}`).delete().then(() => {
      console.log("Deleted...")
    })
  }

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
          <div>
            <Header />
            <CreateArea />
            { notes.map((item, index) => {
              return (
                <Note
                  key={index}
                  id={index}
                  title={item.title}
                  content={item.content}
                  onDelete={deleteNote}
                />
              )
            })
            }
            <Footer />
          </div>
        )
      }
    </div>
  );
}

export default App;
