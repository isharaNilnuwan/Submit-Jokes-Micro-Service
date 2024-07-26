const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const jokes = require("./features/joke.route");
const cors = require("cors");

const service = "Test Service";

const app = express();

app.use(express.json());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use((req, res, next) => {
  var requestedUrl = req.protocol + "://" + req.get("Host") + req.url;
  let log = service + " recived request. " + requestedUrl;
  if (req.query && req.query.user) {
    log = log + ", by user : " + req.query.user;
  }
  next();
});

app.use("/submitJokes", jokes);

app.use((req, res, next) => {  
  return res.status(404).send({ success: false, message: "Url Not found" });
});

app.use((err, req, res, next) => {
  console.log("Error handler:", err);
  return res.status(500).send({ success: false, message: "Error" });
});

module.exports = app;
