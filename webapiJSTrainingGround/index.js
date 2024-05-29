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

app.use(express.json());
app.post("/api/developers/", (req, res) => {
  const newDev = {
    id: db.length + 1,
    name: req.body.name,
    email: req.body.email,
    city: req.body.city,
  };
  db.push(newDev);

  res
    .status(201)
    .setHeader("location", `/api/developers/${newDev.id}`)
    .json(newDev);
});

app.delete("/api/developers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const developer = db.findIndex((developer) => developer.id === id);
  if (developer !== -1) {
    db.splice(developer, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: `Developer with id ${id} not found` });
  }
});

app.patch("/api/developers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const developer = db.find((developer) => developer.id === id);
  if (developer) {
    developer.name =
      req.body.name !== undefined ? req.body.name : developer.name;
    developer.email =
      req.body.email !== undefined ? req.body.email : developer.email;
    developer.city =
      req.body.city !== undefined ? req.body.city : developer.city;

    res
      .status(200)
      .setHeader("location", `/api/developers/${developer.id}`)
      .json(developer);
  } else {
    res.status(404).json({ message: `Developer with id ${id} not found` });
  }
});

app.get("/api/developers/:id", (req, res) => {
  const developer = db.find((developer) => developer.id == req.params.id);
  return developer ? res.json(developer) : res.status(404).end();
});

app.get("/api/developers", (req, res) => {
  res.json(db);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running att http://localhost:${port}/`);
});
