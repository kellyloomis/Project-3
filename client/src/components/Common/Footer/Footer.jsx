import React, { Component } from "react";

class Footer extends Component {

	render() {
		return (
			<footer className="w3-container w3-padding-64 w3-light-grey w3-center w3-large"> 
				<p>Copyright &copy; { new Date().getFullYear() } - Peak Performance</p>
			</footer>
		);
	}	
}

export default Footer;