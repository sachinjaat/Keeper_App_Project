import express from "express";
import Note from "../models/schema.js";
const router = express.Router();


router.route("/notes").get((req, res) => {
    Note.find()
      .then(notes => res.json(notes))
      .catch(err => res.status(400).json('Error ' + err))
   });


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
router.route("/notes/:id").delete((req, res) => {
  Note.findByIdAndDelete(req.params.id)
  .then(() => res.json("Note deleted."))
  .catch(err => res.status(400).json("Error: " + err));
});

export default router;
