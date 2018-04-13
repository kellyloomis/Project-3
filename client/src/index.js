import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import Signup from "./views/Signup/Signup.jsx";

import indexRoutes from "./routes/index.jsx";

import "./assets/css/dashboard.css";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
    	<Route path="/signup" component={Signup} />
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component}  key={key}/>;
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
