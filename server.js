import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import note from "./models/user.js";
import notesRoute from "./routes/user.js";

const app = express();
const port = 4000 || process.env.PORT;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/notes", notesRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", async (req, res) => {
  const allnotes = await note.find({});

  res.render("home.ejs", {
    notes: allnotes,
  });
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
