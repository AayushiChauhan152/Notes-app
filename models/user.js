import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});

const Note = new mongoose.model("note", notesSchema);

export default Note;
