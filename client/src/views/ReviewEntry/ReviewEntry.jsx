import React, { Component } from "react";
import Category from "../../components/ReviewEntryPage/Category/Category.jsx";
import categories from "../../components/ReviewEntryPage/Category/categories.json";

import "./ReviewEntry.css";

class ReviewEntry extends Component {

	constructor() {
    super();
    this.state = {
      employeeId: "",
      attendance: 3,
      appearance: 3,
      professionalism: 3,
      communication: 3,
      taskCompletion: 3,
      quality: 3
    };
    this.handleSelectEmployee = this.handleSelectEmployee.bind(this);
    this.handleReviewSelect = this.handleSelectEmployee.bind(this);
  }

  	handleSelectEmployee = (id) => {
  		console.log("you clicked me", id);
  		this.setState({ employeeId: id});
  	}

  	handleReviewSelect = () => {
  		console.log("you clicked me");
  	}

	render() {
		const employees = this.props.location.state;

		console.log("employees: ", employees);
		return (
			
			<div className="w3-content">
				<div className="w3-dropdown-hover">
				  <button className="w3-button w3-blue">Select Employee</button>
				  <div className="w3-dropdown-content w3-bar-block w3-border">
				  	
			  		{employees && employees.employees.map((item, index) => (
						<button className="w3-block w3-white w3-border-color-white" onClick={this.handleSelectEmployee.bind(this, item.id)} key={item.id.toString()} value={item.id}>
							{item.firstname + " " + item.lastname}
						</button>
				  	))}
				  </div>
				</div>
				<br/><br/>
				<div>
					{categories.data.map((item, index) => (
						<Category  key={index.toString()} title={item.title} text={item.text} onClick={this.handleReviewSelect}/>
					))}
				</div>
				<div>
					<br/>
					<br/>
					<button className="w3-btn w3-blue">Submit</button>
				</div>
			</div>
		);
	}
}

export default ReviewEntry;
