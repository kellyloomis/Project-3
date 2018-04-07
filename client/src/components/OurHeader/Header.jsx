import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css"

class Header extends Component {

	render() {
		return (
			<header className="w3-panel w3-center w3-opacity">
			  <h1 className="w3-xxlarge">Welcome [insert name]!</h1>
			  <h1 className="w3-large">What Would You Like To Do?</h1>
			  
			  <div className="w3-padding-4">
			    <div className="w3-bar">
			      <Link to="/review-entry" className="w3-bar-item w3-button">
			    		Enter Review
			      </Link>
			      <Link to="/dashboard" className="w3-bar-item w3-button">
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