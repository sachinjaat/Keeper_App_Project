import express from "express";
import Note from "../models/schema.js";
const router = express.Router();
import path from "path";
const __dirname = path.resolve();
// import starterNotes from "../Startingnotes.js";
//home route

  router.route("/").get((req, res) => {
      Note.find()
      .then(notes => res.json(notes))
      .catch(err => res.status(400).json('Error ' + err))
   });
   //else{
   //   console.log("Got succesfully");
   // }
//  }
// });

// router.route("/").get((req, res) => {
//   Note.find()
//   .then(notes => res.sendFile("C:/User/Dell/Desktop/web development/Keeper Project/public/index.html"))
//   .catch(err => res.status(400).json("Error:" + err))
// });

//post route
router.route("/").post((req, res) => {
   const title = req.body.title;
   const content = req.body.content;

  const newNote = new Note({
    title,
    content
  });
  newNote.save()
   .then(() => res.json("Note Added"))
   .catch(err => res.status(400).json("Error " + err));
});

//delete
// router.route("/:id").delete((req, res) => {
//   Note.findByIdAndDelete(req.params.id)
//   .then(() => res.json("Note deleted."))
//   .catch(err => res.status(400).json("Error: " + err));
// });
//
// //update
// router.route("/:id").post((req, res) => {
//   Note.findById(req.params.id)
//   .then(note => {
//     note.title = req.body.title;
//     note.content = req.body.content;
//     note.save()
//     .then(() => res.json("note updated!"))
//     .catch(err => res.status(400).json("Error: " + err));
//   })
//   .catch(err => res.status(400).json("Error: " + err));
// });

export default router;
