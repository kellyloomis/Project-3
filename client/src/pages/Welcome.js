import React, { Component } from "react";
import Header from "../components/WelcomePage/Header/Header.js";
import "./Welcome.css";
import PhotoGrid from "../components/WelcomePage/PhotoGrid/PhotoGrid.js"
import Footer from "../components/WelcomePage/Footer/Footer.js"

class Welcome extends Component {

	render() {
		return (
			<div className="w3-content">
				<Header />
				<PhotoGrid />
				<Footer />
			</div>
		);
	}
}

export default Welcome;