import express from "express";
import path from "path";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/frontend/index.html"));
});

app.get("/matches", (req, res) => {
  res.sendFile(path.resolve("public/frontend/matches/matches.html"));
});

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log("Server is NOT running");
  }
  console.log("Server is running on:", PORT);
});
