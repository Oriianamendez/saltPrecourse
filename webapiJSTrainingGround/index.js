const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const developer = {
    name: "Oriana",
    email: "unemail@salt.com",
    city: "Stockholm",
  };
  res.status(201).setHeader("location", `/api/developers/1`).json(developer);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running att http://localhost:${port}/`);
});
