import React, { Component } from 'react';
import { Grid, InputLabel } from 'material-ui';
import API from './../../api/API';

import { RegularCard, Button, CustomInput, ItemGrid } from './../../components';

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
    firebaseId: ''
  };

  // When the component mounts, load the current manager(User model) and save them to this.state.manager
  // Also save the User ID to this.state.userId
  componentDidMount() {
    console.log(this.state.user);
    if (this.state.user) {
      this.setState({
        company: this.state.user.companyName || '',
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
  // Console.log for now but will eventually be a notification popup
  isValid = () => {
    if (
      this.state.firstName &&
      this.state.lastName &&
      this.state.companyName &&
      this.state.manager &&
      this.state.department
    ) {
      return true;
    } else {
      console.log('Please complete all fields of the form.');
    }
  };

  parseGoals = () => {
    console.log('PARSING');
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
          goalArray.forEach(goal => {
            API.saveGoal({
              goals: goal.trim(),
              EmployeeId: this.state.employeeId
            })
              .then(res => {
                console.log(res);
              })
              .catch(err => console.log(err));
          });
        })
        // .done(() => {
        //   this.props.history.push("/");
        // })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
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
                        labelText="Enter goals here."
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
