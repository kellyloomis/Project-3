const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Requiring our models for syncing
var db = require("./models");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Syncing our sequelize models and then starting our Express app
// =============================================================
// Add {force: true} inside of sync to resolve DB/model changes
db.sequelize.sync().then(function() {
  	app.listen(PORT, function() {
	  console.log(`🌎 ==> Server now on port ${PORT}!`);
	});
});
