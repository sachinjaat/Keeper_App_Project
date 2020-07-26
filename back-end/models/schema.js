import mongoose from "mongoose";

const Schema = mongoose.Schema;

const noteSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true, minlength: 5}
  user:[
    title: {type: String},
    content: {type: String}
  ]

});

const Note = mongoose.model('Note', noteSchema);

export default Note;
