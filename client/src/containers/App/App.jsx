import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { auth } from './../../firebase.js';

import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import { withStyles, Hidden } from "material-ui";

import { Header, Sidebar } from "./../../components";

import appRoutes from "./../../routes/app.jsx";

import appStyle from "./../../variables/styles/appStyle.jsx";

import logo from "./../../assets/img/reactlogo.png";

const switchRoutes = (
  <Switch>
    {appRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      mobileOpen: false
    }
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
      if(!this.state.user) {
        this.props.history.push("/signup");
      }
    });
    if(navigator.platform.indexOf('Win') > -1){
      // eslint-disable-next-line
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
  }
  componentDidUpdate() {
    this.refs.mainPanel.scrollTop = 0;
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        <Hidden mdUp>
          <Sidebar
            routes={appRoutes}
            logoText={"Peak Performance"}
            logo={logo}
            // Can pass an image as prop to display it as a background image for Sidebar
            // image={}
            handleDrawerToggle={this.handleDrawerToggle}
            open={this.state.mobileOpen}
            color="blue"
            {...rest}
          />
        </Hidden>
        <div className={classes.mainPanel} ref="mainPanel">
          <Header
            routes={appRoutes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
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
