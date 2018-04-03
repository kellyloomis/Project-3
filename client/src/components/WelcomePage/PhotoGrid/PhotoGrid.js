import React, { Component } from "react";
import "./PhotoGrid.css"

class PhotoGrid extends Component {

	render() {
		return (
			<div className="w3-row-padding">
			  <div className="w3-third">
			    <img src="./colorwheels.jpg" alt="color wheels" className="color-wheel"/>
			  </div>

			  <div className="w3-third">
			    <img src="./colorwheels.jpg" alt="color wheels" className="color-wheel"/>
			  </div>

			  <div className="w3-third">
			    <img src="./colorwheels.jpg" alt="color wheels" className="color-wheel"/>
			  </div>
			</div>
		);
	}	
}

export default PhotoGrid;