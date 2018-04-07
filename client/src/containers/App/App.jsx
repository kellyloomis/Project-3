import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { withStyles } from "material-ui";

import appRoutes from "./../../routes/app.jsx";

import appStyle from "./../../variables/styles/appStyle.jsx";

const switchRoutes = (
  <Switch>
    {appRoutes.map((prop) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to}/>;
      return <Route path={prop.path} component={prop.component}/>;
    })}
  </Switch>
);

class App extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <div className={classes.wrapper}>
        
        <div className={classes.mainPanel} ref="mainPanel">
          {
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default withStyles(appStyle)(App);
