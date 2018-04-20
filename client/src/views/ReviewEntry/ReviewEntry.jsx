import React, { Component } from "react";
import Category from "../../components/ReviewEntryPage/Category/Category.jsx";
import categories from "../../components/ReviewEntryPage/Category/categories.json";

import { FormControl, InputLabel, MenuItem, Select } from "material-ui";
import { withStyles } from 'material-ui/styles';

import "./ReviewEntry.css";

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 300,
  }
});

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
      quality: 3,
      selectedEmployee: ""
    };
    this.handleSelectEmployee = this.handleSelectEmployee.bind(this);
    this.handleReviewSelect = this.handleSelectEmployee.bind(this);
  };

  	createMenuItems = () => {
  		let employees = this.props.location.state.employees;
  		let menuItems = [];
  		employees.forEach(employee => {
  			menuItems.push(<MenuItem key={employee.id} onClick={this.handleSelectEmployee(employee.id)} value={employee.firstname + " " + employee.lastname}>{employee.firstname + " " + employee.lastname}</MenuItem>);
  		});
  		return menuItems;
  	};

  	handleChange = event => {
	    this.setState({ [event.target.name]: event.target.value });
	  };

  	handleSelectEmployee = (id) => () => {
  		console.log("you clicked me", id);
  		this.setState({ employeeId: id});
  	};

  	handleReviewSelect = () => {
  		console.log("you clicked me");
  	};

	render() {
		const employees = this.props.location.state;
		const { classes } = this.props;

		console.log("employees: ", employees);
		return (
			
			<div className="w3-content">
		        <FormControl className={classes.formControl}>
		          <InputLabel htmlFor="employee-select">Select Employee</InputLabel>
		          <Select
		            value={this.state.selectedEmployee}
		            onChange={this.handleChange}
		            inputProps={{
		              name: 'selectedEmployee',
		              id: 'employee-select',
		            }}
		          >
		            <MenuItem value="">
		              <em>None</em>
		            </MenuItem>
		            {this.createMenuItems()}
		          </Select>
		        </FormControl>
				<br/><br/>
				<div>
					{categories.data.map((item, index) => (
						<Category key={item.title} title={item.title} text={item.text} onClick={this.handleReviewSelect}/>
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

export default withStyles(styles)(ReviewEntry);
