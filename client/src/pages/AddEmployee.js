import React, { Component } from "react";
import Header from "../components/AddEmployeePage/Header/Header.js";
import "./AddEmployee.css";
import Footer from "../components/Common/Footer/Footer.js"

class Welcome extends Component {

	render() {
		return (
			<div className="w3-light-grey">
				<Header />
				<Footer />
			</div>
		);
	}
}

export default Welcome;