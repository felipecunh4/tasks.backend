const app = require("express")();

app.get("/", (req, res) => {
  res.status(200).send("Backend");
});

app.listen(3000, () => {
  console.log("Backend starting...");
});
