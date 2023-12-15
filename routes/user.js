import express from "express";
import Note from "../models/user.js";
const router = express.Router();

router.get("/add", (req, res) => {
  res.render("addNotes.ejs");
});

router.post("/", async (req, res) => {
  const { title, content } = req.body;
  const note = await Note.create({
    title,
    content,
  });

  res.redirect(`/notes/${note._id}`);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const note = await Note.findById(id);

  res.render("note.ejs", {
    note,
  });
});

router.get("/dlt/:id", async (req, res) => {
  const id = req.params.id;
  await Note.deleteOne({ _id: id });

  res.redirect("/");
});
export default router;
