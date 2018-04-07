import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Welcome from "./pages/Welcome";
import AddEmployee from "./pages/AddEmployee";
import ReviewEntry from "./pages/ReviewEntry";

const App = () => (
	<Router>
	    <div>
	      <Switch>
	        <Route exact path="/" component={Welcome} />
	        <Route exact path="/add-employee" component={AddEmployee} />
	        <Route exact path="/enter-review" component={ReviewEntry} />
	      </Switch>
	    </div>
  </Router>
);

export default App;
