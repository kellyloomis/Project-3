import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css"

class Header extends Component {
	constructor() {
    super();
    this.state = {
      user: JSON.parse(sessionStorage.getItem("user")),
      displayName: "User",
      mobileOpen: false
    }
  }

  componentDidMount() {
	if (this.state.user) {
	  	if(this.state.user.firstname) {
	  		this.setState({displayName: this.state.user.firstname})
	  	} else {
	    	this.setState({displayName: this.state.user.username});
		}
	}
  }

	render() {
		console.log(this);
		console.log("Employees: ", this.props.employees);
		return (
			<header className="w3-panel w3-center w3-opacity">
			  <h1 className="w3-xxlarge">Welcome {this.state.displayName}!</h1>
			  <h1 className="w3-large">What Would You Like To Do?</h1>
			  
			  <div className="w3-padding-4">
			    <div className="w3-bar">
			      
			      <Link to={{ pathname: '/review-entry', state: { employees: this.props.employees} }} className="w3-bar-item w3-button">
			       		Enter Review
			       </Link>
			      <Link to={{ pathname: '/select-report', state: { employees: this.props.employees} }} className="w3-bar-item w3-button">
			       		Run Reports
			       </Link>
			       <Link to="/add-employee" className="w3-bar-item w3-button">
			       		Add New Employee
			       </Link>
			    </div>
			  </div>
			</header>
		);
	}	
}

export default Header;