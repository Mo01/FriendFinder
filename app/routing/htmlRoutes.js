// Dependency
var path = require("path");

// Routing
module.exports = function(app) {
	// GET request
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
	// If no matching route is found direct to home
	app.get("/:whateverElse?", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
};