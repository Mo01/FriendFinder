var friends = require("../data/friends.js");

module.exports = function(app) {
  // Return all friends found in friends.js
  app.get("/api/friends", function(req, res) {
    res.json(friends);
    console.log(res.json(friends));
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);

    // Get user details
    var user = req.body;

    // parseInt for scores
    for(var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    var bestFriendIndex = 0;
    var minimumDifference = 40;

	// Start at 0 and loop through array comparing user and friend scores and add difference into totalDifference
    for(var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }

	  // If there is a new minimum, change the index 
      if(totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
      }
    }

    // Find match and push to friend array
    friends.push(user);

    // Send back to user
    res.json(friends[bestFriendIndex]);
  });
};