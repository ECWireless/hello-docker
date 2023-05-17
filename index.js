const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World! Are my auto-builds working?");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
