import app from "api.js";

const port = 3000;
app.listen(port, () => {
  console.log(`Server running att http://localhost:${port}/`);
});
