const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();
require("./config/database");

app.use(express.json());
app.use(cors());
app.use("/", require("./routes/index"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
