const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
app.use(cors());
app.use(bodyParser.json());

dotenv.config();

port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
