const express = require("express");
const app = express();
const PORT = 8001;
const urlRoutes = require("./routes/url");

app.use("/api", urlRoutes);

app.listen(PORT, () => {
  console.log(`App Listning at port ${PORT}`);
});
