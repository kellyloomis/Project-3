import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from './../../firebase.js';

import "./Header.css"

class Header extends Component {
	constructor() {
    super();
    this.state = {
      user: JSON.parse(sessionStorage.getItem("user")),
      userName: "User",
      mobileOpen: false
    }
  }

  componentDidMount() {
	  if (this.state.user) {
			console.log("===================/n")
			console.log(this.state.user)
	    this.setState({userName: this.state.user.username});
		}
  }

	render() {
		console.log(this);
		return (
			<header className="w3-panel w3-center w3-opacity">
			  <h1 className="w3-xxlarge">Welcome {this.state.userName}!</h1>
			  <h1 className="w3-large">What Would You Like To Do?</h1>
			  
			  <div className="w3-padding-4">
			    <div className="w3-bar">
			      <Link to="/review-entry" className="w3-bar-item w3-button">
			    		Enter Review
			      </Link>
			      <Link to="/select-report" className="w3-bar-item w3-button">
			       		Run Reports
			       </Link>
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