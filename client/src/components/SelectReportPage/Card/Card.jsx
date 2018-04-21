import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from 'material-ui';
import { withStyles } from 'material-ui/styles';

import "./Card.css"

import {
  Button
} from "./../../../components";

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 300
  }
});

class Card extends Component {
    state = {
        start: "",
        end: "",
        EmployeeId: ""
    };

    createMenuItems = () => {
      if(this.props.employees) {
        let employees = this.props.employees;
        let menuItems = [];
        employees.forEach(employee => {
          menuItems.push(
            <MenuItem key={employee.id} value={employee.id}>
              {employee.firstname + ' ' + employee.lastname}
            </MenuItem>
          );
        });
        return menuItems;
      }
    };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };

    render() {
      const { classes } = this.props;
      console.log(this.props);
        return (
            <div className="w3-half key={this.props.key}">
                <div className="w3-card w3-container">
                    <h3>{this.props.title}</h3><br/>
                    <i className="fa fa-user w3-margin-bottom w3-text-theme"></i>
                    <p>{this.props.text1}</p>
                    <p>{this.props.text2}</p>
                    {this.props.employees ? 
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
                    :
                    ""
                    }
                    <br/>
                   <Button component={Link} to={{pathname: "/dashboard", state: {id: this.state.EmployeeId, start: this.state.start, end: this.state.end}}} color="warning">Submit</Button>
                </div>
            </div>
        );
    } 
}

export default withStyles(styles)(Card);
