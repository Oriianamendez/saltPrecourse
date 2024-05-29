const express = require("express");
const app = express();

const db = [
  {
    id: 1,
    name: "Oriana",
    email: "unemail@salt.com",
    city: "Stockholm",
  },
  {
    id: 2,
    name: "Amin",
    email: "theemailofamin@salt.com",
    city: "Buenos Aires",
  },
];

app.get("/api/developers/:id", (req, res) => {
  const developer = db.find((developer) => developer.id == req.params.id);
  return !developer ? res.status(404).end() : res.json(developer);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running att http://localhost:${port}/`);
});
