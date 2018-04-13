import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import "./Header.css"

class Header extends Component {
	constructor() {
    super();
    this.state = {
      user: null,
      mobileOpen: false
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
      if(!this.state.user) {
        this.props.history.push("/signup");
      }
    });
  }

	render() {
		return (
			<header className="w3-panel w3-center w3-opacity">
			  <h1 className="w3-xxlarge">Welcome {this.state.user.displayName}!</h1>
			  <h1 className="w3-large">What Would You Like To Do?</h1>
			  
			  <div className="w3-padding-4">
			    <div className="w3-bar">
					<Link to="/enter-review" className="w3-bar-item w3-button">
						Enter Review
					</Link>
			      <a href="{#}" className="w3-bar-item w3-button">Run Report</a>  
			       <Link to="/add-employee" className="w3-bar-item w3-button">
			       		Add New Employee
			       </Link>
			      <a href="{#}" className="w3-bar-item w3-button">View Employee Profile</a>
			    </div>
			  </div>
			</header>
		);
	}	
}

export default Header;