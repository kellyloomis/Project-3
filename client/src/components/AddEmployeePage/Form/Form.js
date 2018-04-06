import React, { Component } from "react";
import "./Form.css"

class Form extends Component {

	render() {
		return (
		<form>
	        <div className="w3-row-padding wrapper-1">
	          <div className="w3-half w3-margin-bottom">
	            <input className="w3-input w3-border" type="number" placeholder="EIN" required/>
	          </div>
	          <div className="w3-half">
	            <input className="w3-input w3-border" type="text" placeholder="First Name" required/>
	          </div>
	        </div>
	        <div className="w3-row-padding wrapper-2">
	          <div className="w3-half w3-margin-bottom">
	            <input className="w3-input w3-border" type="text" placeholder="Last Name" required/>
	          </div>
	          <div className="w3-half">
	            <input className="w3-input w3-border" type="text" placeholder="Job Title" required/>
	          </div>
	        </div>
	        <div className="w3-row-padding wrapper-3">
	          <div className="w3-half">
	            <input className="w3-input w3-border" type="text" placeholder="Manager" required/>
	          </div>
	          <div className="w3-half">
	            <input className="w3-input w3-border" type="text" placeholder="Department" required/>
	          </div>
	        </div>
	        <button className="w3-button w3-dark-grey" type="submit">Add Employee</button>
      	</form>
		);
	}	
}

export default Form;