// Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// Express and port
var app = express();
var PORT = process.env.PORT || 8080;

// BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
var htmlRoutes = require("./app/routing/htmlRoutes");
var apiRoutes = require("./app/routing/apiRoutes");
htmlRoutes(app);
apiRoutes(app);

// listen to the port
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});