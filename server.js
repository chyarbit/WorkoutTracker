const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const apiController = require("./controllers/apiController.js");
const htmlController = require("./controllers/htmlController.js");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

app.use(apiController);
app.use(htmlController);

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  