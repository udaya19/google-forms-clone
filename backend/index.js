const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
require("./config/database");

// app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./routes/index"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
