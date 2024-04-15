const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const storyRoute = require("./routes/storyRoute");
const { errorMiddleware } = require("./middlewares/errorMiddleware");
const FRONTEND = process.env.FRONTEND;

app.use(bodyParser.json());
var corsOptions = {
    origin: FRONTEND,
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// using this route for testing errorMiddleware
app.get("/", (req, res) => {
    // throw new Error("test error");
    res.send("Hello server");
});

app.use("/api/story", storyRoute);

app.use(errorMiddleware);
