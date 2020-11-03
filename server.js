// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
const { Console } = require("console");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 8000;
app.listen(port, listening);

function listening() {
  console.log(`listening on port ${port}`);
}

//Get data route
app.get("/getData", function (req, res) {
  res.send(projectData);
});

//Post data route
app.post("/postData", function (req, res) {
  let entry = {
    temp: req.body.temp,
    date: req.body.date,
    userData: req.body.userData,
  };
  Console.log(entry);
  projectData.push(entry);
});
