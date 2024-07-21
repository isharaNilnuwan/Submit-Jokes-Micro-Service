const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const jokes = require("./features/joke.route");

const HOST = "0.0.0.0";
const service = "Test Service";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use((req, res, next) => {
  var requestedUrl = req.protocol + "://" + req.get("Host") + req.url;
  let log = service + " recived request. " + requestedUrl;
  if (req.query && req.query.user) {
    log = log + ", by user : " + req.query.user;
  }
//   console.log(log);
  next();
});

app.use("/submitJokes", jokes);

app.use((req, res, next) => {
  var requestedUrl = req.protocol + "://" + req.get("Host") + req.url;
//   console.log(
//     "Inside 'resource not found' handler , Req resource: " + requestedUrl
//   );
  return res.status(404).send({ success: false, message: "Url Not found" });
});

// error handler
app.use((err, req, res, next) => {
  console.log("Error handler:", err);
  return res.status(500).send({ success: false, message: "Error" });
});


module.exports = app;
