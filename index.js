const express = require("express");
const app = express();
const PORT = 8001;

app.use("/", (req, res) => {
  res.send("App Working fine");
});

app.listen(PORT, () => {
  console.log(`App Listning at port ${PORT}`);
});
