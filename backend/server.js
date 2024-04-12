const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const storyRoute = require("./routes/storyRoute");

const app = express();
app.use(cors());
app.use(bodyParser.json());

dotenv.config();

app.use("/api/story", storyRoute);

port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
