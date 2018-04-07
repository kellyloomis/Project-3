import React, { Component } from "react";
import "./Welcome.css";

import {
  OurHeader,
  PhotoGrid
} from "./../../components";

class Welcome extends Component {

	render() {
		return (
			<div className="w3-content">
				<OurHeader />
				<PhotoGrid />
			</div>
		);
	}
}

export default Welcome;