import React, { Component } from 'react';
import { Grid, InputLabel } from 'material-ui';
import { HighlightOff } from "material-ui-icons";
import API from './../../api/API';

import { RegularCard, Button, CustomInput, ItemGrid, Snackbar } from './../../components';

class NewEmployee extends Component {
  // Setting our component's initial state
  state = {
    user: JSON.parse(sessionStorage.getItem('user')),
    companyName: '',
    email: '',
    firstName: '',
    lastName: '',
    manager: '',
    department: '',
    goals: '',
    userId: '',
    employeeId: '',
    firebaseId: '',
    emailError: false,
    firstnameError: false,
    lastnameError: false,
    managerError: false,
    departmentError: false,
    companyError: false,
    tc: false
  };

  // When the component mounts, load the current manager(User model) and save them to this.state.manager
  // Also save the User ID to this.state.userId
  componentDidMount() {
    console.log(this.state.user);
    if (this.state.user) {
      this.setState({
        companyName: this.state.user.companyName || '',
        manager: this.state.user.email,
        userId: this.state.user.id
      });
    }
  }

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // Checks if the form has been completed and returns true if it has, false if not
  isValid = () => {
    let fnError = this.validFirstName();
    let lnError = this.validLastName();
    let eError = this.validEmail();
    let cError = this.validCompany();
    let mError = this.validManager();
    let dError = this.validDepartment()
    if (fnError && lnError && eError && cError && mError && dError) {
      return true;
    } else {
      console.log('Please complete all fields of the form.');
      this.showNotification("tc");
    }
  };

  validEmail = () => {
    if(this.state.email) {
      this.setState({
        emailError: false
      });
      return true;
    } else {
      this.setState({
        emailError: true
      });
      return false;
    }
  };

  validFirstName = () => {
    if(this.state.firstName) {
      this.setState({
        firstnameError: false
      });
      return true;
    } else {
      this.setState({
        firstnameError: true
      });
      return false;
    }
  };

  validLastName = () => {
    if(this.state.lastName) {
      this.setState({
        lastnameError: false
      });
      return true;
    } else {
      this.setState({
        lastnameError: true
      });
      return false;
    }
  };

  validManager = () => {
    if(this.state.manager) {
      this.setState({
        managerError: false
      });
      return true;
    } else {
      this.setState({
        managerError: true
      });
      return false;
    }
  };

  validDepartment = () => {
    if(this.state.department) {
      this.setState({
        departmentError: false
      });
      return true;
    } else {
      this.setState({
        departmentError: true
      });
      return false;
    }
  };

  validCompany = () => {
    if(this.state.companyName) {
      this.setState({
        companyError: false
      });
      return true;
    } else {
      this.setState({
        companyError: true
      });
      return false;
    }
  };

  // When the form is submitted, use the API.saveEmployee method to save the Employee data
  handleFormSubmit = event => {
    event.preventDefault();
    let goalArray = '';
    if (this.isValid()) {
      if (this.state.goals) {
        goalArray = this.state.goals.split(',');
        console.log(goalArray);
      }
      API.saveEmployee({
        company: this.state.companyName,
        email: this.state.email,
        firstname: this.state.firstName,
        lastname: this.state.lastName,
        manager: this.state.manager,
        department: this.state.department,
        UserId: this.state.userId
      })
        .then(res => {
          this.setState({
            employeeId: res.data.id
          });
          console.log(res);
          if(goalArray) {
            goalArray.forEach(goal => {
              API.saveGoal({
                goals: goal.trim(),
                EmployeeId: this.state.employeeId
              })
                .then(res => {
                  console.log(res);
                  this.props.history.push("/welcome");
                })
                .catch(err => console.log(err));
            });
          } else {
            this.props.history.push("/welcome");
          }
        })
        .catch(err => console.log(err));
    }
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
    return (
      <div>
        <Snackbar
          place="tc"
          color="warning"
          icon={HighlightOff}
          message="Please complete all of the required fields."
          open={this.state.tc}
          closeNotification={() => this.setState({ tc: false })}
          close
        />
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <RegularCard
              cardTitle="Add new employee"
              cardSubtitle="Enter their profile"
              content={
                <div>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={7}>
                      <CustomInput
                        labelText="Company Name"
                        id="company-name"
                        value={this.state.companyName}
                        onChange={this.handleInputChange}
                        name="companyName"
                        formControlProps={{
                          error: this.state.companyError,
                          required: true,
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Email address"
                        id="email-address"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                        formControlProps={{
                          error: this.state.emailError,
                          required: true,
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="First Name"
                        id="first-name"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        name="firstName"
                        formControlProps={{
                          error: this.state.firstnameError,
                          required: true,
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Last Name"
                        id="last-name"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        name="lastName"
                        formControlProps={{
                          error: this.state.lastnameError,
                          required: true,
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Manager"
                        id="manager"
                        value={this.state.manager}
                        onChange={this.handleInputChange}
                        name="manager"
                        formControlProps={{
                          error: this.state.managerError,
                          required: true,
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Department"
                        id="department"
                        value={this.state.department}
                        onChange={this.handleInputChange}
                        name="department"
                        formControlProps={{
                          error: this.state.departmentError,
                          required: true,
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={12}>
                      <InputLabel style={{ color: '#AAAAAA' }}>
                        Goals
                      </InputLabel>
                      <CustomInput
                        labelText="Enter goals here separated by comma(,) ex: Goal 1, Goal 2, Goal 3"
                        id="goals"
                        value={this.state.goals}
                        onChange={this.handleInputChange}
                        name="goals"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 5
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                </div>
              }
              footer={
                <Button onClick={this.handleFormSubmit} color="primary">
                  Add Employee
                </Button>
              }
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

export default NewEmployee;
