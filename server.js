const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Requiring our models for syncing
var db = require('./models');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Add routes, both API and view
app.use(routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
// Add {force: true} inside of sync to resolve DB/model changes
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});

module.exports = app;
