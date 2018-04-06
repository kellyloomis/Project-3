import React, { Component } from "react";
import "./Header.css"
import Form from "../Form/Form.js"

class Header extends Component {

	render() {
		return (
			<header className="w3-display-container w3-content">
				<div>
 					<img src="./employee.png" alt="Cartoon Employee" className="w3-image"/>
 				</div>
 				<div className="w3-display-left w3-padding w3-col l6 m8">
 					<div className="w3-container w3-opacity w3-padding-16">
 						<Form />
 					</div>
 				</div>
			</header>
		);
	}	
}

export default Header;