import mongoose from "mongoose";

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {type: String},
    content: {type: String},
    userId: { type: Schema.Types.ObjectId, ref: 'User' }

});

const Note = mongoose.model('Note', noteSchema);

export default Note;
