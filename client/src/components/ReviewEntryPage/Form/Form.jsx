import React, { Component } from "react";
import "./Form.css"

class Form extends Component {

	render() {
		return (
			<form className="w3-container">
				<label className="w3-text-blue"><b>Enter Review Comments</b></label>
				<input className="w3-input w3-border" type="text"/>
				<button className="w3-btn w3-blue">Submit</button>
			</form>
		);
	}	
}

export default Form;