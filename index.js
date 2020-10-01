const app = require("express")();
const db = require("./config/db");
const consign = require("consign");

consign().then("./config/middleware.js").into(app);

app.get("/", (req, res) => {
  res.status(200).send("Backend");
});

app.db = db;

app.listen(3000, () => {
  console.log("Backend starting...");
});
