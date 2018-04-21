import React, { Component } from 'react';
import Category from '../../components/ReviewEntryPage/Category/Category.jsx';
import categories from '../../components/ReviewEntryPage/Category/categories.json';
import API from './../../api/API';
import { FormControl, InputLabel, MenuItem, Select } from 'material-ui';
import { HighlightOff } from "material-ui-icons";
import { withStyles } from 'material-ui/styles';

import {
  Button,
  Snackbar
} from "./../../components";

import './ReviewEntry.css';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 300
  }
});

class ReviewEntry extends Component {
  constructor() {
    super();
    this.state = {
      attendance: "",
      appearance: "",
      professionalism: "",
      communication: "",
      taskcompletion: "",
      quality: "",
      EmployeeId: "",
      errorMessage: "",
      tc: false
    };
  }

  createMenuItems = () => {
    let employees = this.props.location.state.employees;
    let menuItems = [];
    employees.forEach(employee => {
      menuItems.push(
        <MenuItem key={employee.id} value={employee.id}>
          {employee.firstname + ' ' + employee.lastname}
        </MenuItem>
      );
    });
    return menuItems;
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleReviewSelect = (score,event) => {
  	if(event.target.id === "yellowButton") {
  		console.log("Im yellow");
  		event.target.style = "background-color: #ff9800";
  		event.target.nextSibling.style = "background-color: #999";
  		event.target.previousSibling.style = "background-color: #999";
  	} else if(event.target.id === "greenButton") {
  		console.log("Im green");
  		event.target.style = "background-color: #4caf50";
  		event.target.nextSibling.style = "background-color: #999";
  		event.target.nextSibling.nextSibling.style = "background-color: #999";
  	} else if(event.target.id === "redButton") {
  		console.log("Im red");
  		event.target.style = "background-color: #e91e63";
  		event.target.previousSibling.style = "background-color: #999";
  		event.target.previousSibling.previousSibling.style = "background-color: #999";
  	}
    console.log('you clicked score', score);
    let data = score;
    data.subject === 'ATTENDANCE'
      ? this.setState({ attendance: data.score })
      : data.subject === 'APPEARANCE'
        ? this.setState({ appearance: data.score })
        : data.subject === 'PROFESSIONALISM'
          ? this.setState({ professionalism: data.score })
          : data.subject === 'COMMUNICATION'
            ? this.setState({ communication: data.score })
            : data.subject === 'TASK COMPLETION'
              ? this.setState({ taskcompletion: data.score })
              : this.setState({ quality: data.score });
  };

  validate = () => {
  	console.log(this.state);
  	if(!this.state.EmployeeId) {
  		console.log("first error");
  		this.setState({
  			errorMessage: "Please select an Employee to review."
  		});
  		return false;
  	}
  	if(!this.state.attendance ||
  		 !this.state.appearance ||
  		 !this.state.communication ||
  		 !this.state.professionalism ||
  		 !this.state.quality ||
  		 !this.state.taskcompletion) {
  		this.setState({
  			errorMessage: "Please complete all entry for the review."
  		});
  		return false;
  	}
  	return true;
  };

  handleSubmit = () => {
  	console.log('you clicked SUBMIT');
    if(!this.validate()) {
    	this.showNotification("tc");
    	return;
    }
    let data = {
    	attendance: this.state.attendance,
  		appearance: this.state.appearance,
  		communication: this.state.communication,
  		professionalism: this.state.professionalism,
  		quality: this.state.quality,
  		taskcompletion: this.state.taskcompletion,
  		EmployeeId: this.state.EmployeeId
  	};
    API.saveReview(data).then(res => {
      console.log('API returns:');
      console.log(res);
      this.props.history.push("/welcome");
    });
  };

  showNotification(place) {
    var x = [];
    x[place] = true;
    this.setState(x);
    setTimeout(
      function() {
        x[place] = false;
        this.setState(x);
      }.bind(this),
      6000
    );
  };

  render() {
    const employees = this.props.location.state;
    const { classes } = this.props;

    console.log('employees: ', employees);
    return (
      <div className="w3-content">
      	<Snackbar
          place="tc"
          color="warning"
          icon={HighlightOff}
          message={this.state.errorMessage}
          open={this.state.tc}
          closeNotification={() => this.setState({ tc: false })}
          close
        />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="employee-select">Select Employee</InputLabel>
          <Select
            value={this.state.EmployeeId}
            onChange={this.handleChange}
            inputProps={{
              name: 'EmployeeId',
              id: 'employee-select'
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {this.createMenuItems()}
          </Select>
        </FormControl>
        <br />
        <br />
        <div>
          {categories.data.map(item => (
            <Category
              key={item.title}
              title={item.title}
              text={item.text}
              onClick={this.handleReviewSelect}
            />
          ))}
        </div>
        <div>
          <br />
          <br />
          
          <Button fullWidth={true} size="large" onClick={this.handleSubmit} color="primary">Submit</Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ReviewEntry);
