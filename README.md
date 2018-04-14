# Peak Performance

Our application allows managers to simply track their employee’s goals, measures and performance on a weekly basis.  Managers will utilize existing templates, with the option of customizing, to individually score each employee on a scale of: below expectations, meets expectations, exceeds expectations.  Managers will have a required text box for each question to briefly explain why the selected option/score was given.  

## Features

- Managers can complete regular reviews in a matter of minutes on multiple employees
- Managers can run reports on individual or multiple employees
- Managers can choose periods of time in which to pull data
- Access to real-time data for tracking
- Simplifies mid-year and annual reviews = time savings
- Easy to read charts and graphs
- Free

## Installation

Clone repo
```
git clone https://github.com/kellyloomis/Project-3.git
cd Project-3
yarn install
cd client
yarn install
cd Project-3
yarn build
```

Update Sequelize in Server.js to force: true
```
db.sequelize.sync({force: true}).then(function() {
    app.listen(PORT, function() {
      console.log(`🌎 ==> Server now on port ${PORT}!`);
    });
});

```


## Technology/Framework Used
- React
- Firebase
- Chartist.js
- MySQL
- Yarn
- Jest
- Chai
- Express
- Sequelize

## Live Application

https://stormy-spire-60923.herokuapp.com/signup

## Contributers

- Roy Norton
- Jamie David
- Dillon Faulkner
- Kelly Loomis

