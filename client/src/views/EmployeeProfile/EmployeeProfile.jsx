import React, { Component } from 'react';
import {
  Card,
  CardContent,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel
} from 'material-ui';
import { Done } from 'material-ui-icons';

import API from './../../api/API';

import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid,
  TasksCard
} from './../../components';

import avatar from './../../assets/img/trooper.png';

class EmployeeProfile extends Component {
  state = {
    user: JSON.parse(sessionStorage.getItem('user')),
    manager: '',
    department: '',
    company: '',
    email: '',
    firstname: '',
    lastname: '',
    goals: '',
    newGoals: 0,
    newGoalCount: 0
  };

  componentDidMount() {
    if (this.props.location.state.employeeIdSelected) {
      console.log(
        'Getting Employee ID: ' + this.props.location.state.employeeIdSelected
      );
      API.getEmployee(this.props.location.state.employeeIdSelected).then(
        res => {
          console.log(res);
          this.setState({
            manager: res.data.manager || '',
            department: res.data.department || '',
            company: res.data.company || '',
            email: res.data.email,
            firstname: res.data.firstname || '',
            lastname: res.data.lastname || ''
          });
        }
      );
    }
  }

  addGoal = () => {
    this.setState({
      newGoals: this.state.newGoals + 1
    });
  };

  handleAddNewGoal = value => () => {
    let selected = document.getElementById('goal-textbox' + value);
    API.saveGoal({
      goals: selected.value,
      EmployeeId: this.props.location.state.employeeIdSelected
    }).then(res => {
      document.getElementById('newGoalGrid' + value).innerHTML = '';
      this.setState({
        newGoalCount: this.state.newGoalCount + 1
      });
    });
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.updateUser method to save the new User data
  handleFormSubmit = event => {
    event.preventDefault();
    API.updateEmployee(this.props.location.state.employeeIdSelected, {
      manager: this.state.manager,
      company: this.state.company,
      department: this.state.department,
      email: this.state.email,
      firstname: this.state.firstname,
      lastname: this.state.lastname
    })
      .then(res => {
        console.log(res);
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  render() {
    let goalCards = [];
    for (let i = 0; i < this.state.newGoals; i++) {
      goalCards.push(
        <Grid container id={'newGoalGrid' + i} key={i}>
          <ItemGrid xs={12} sm={12} md={12}>
            <Card>
              <CardContent>
                <FormControl fullWidth={true}>
                  <InputLabel htmlFor="goal-textbox">New Goal</InputLabel>
                  <Input
                    id={'goal-textbox' + i}
                    type={'text'}
                    name="currentGoal"
                    fullWidth={true}
                    autoFocus={true}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Save new goal"
                          onClick={this.handleAddNewGoal(i)}
                        >
                          <Done />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </CardContent>
            </Card>
          </ItemGrid>
        </Grid>
      );
    }
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={8}>
            <RegularCard
              cardTitle="Edit Employee"
              cardSubtitle="Complete your employee's profile"
              content={
                <div>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={12}>
                      <CustomInput
                        labelText="Company"
                        id="company"
                        value={this.state.company}
                        onChange={this.handleInputChange}
                        name="company"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={7}>
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
                    <ItemGrid xs={12} sm={12} md={5}>
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
                    <ItemGrid xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="First Name"
                        id="first-name"
                        value={this.state.firstname}
                        onChange={this.handleInputChange}
                        name="firstname"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Last Name"
                        id="last-name"
                        value={this.state.lastname}
                        onChange={this.handleInputChange}
                        name="lastname"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Email"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                </div>
              }
              footer={[
                <Button key={1} onClick={this.handleFormSubmit} color="primary">
                  Update Employee
                </Button>,
                <Button key={2} onClick={this.addGoal} color="warning">
                  Add Goal
                </Button>
              ]}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <ProfileCard
              avatar={avatar}
              subtitle={this.state.department || 'Department'}
              title={
                this.state.firstname && this.state.lastname
                  ? this.state.firstname + ' ' + this.state.lastname
                  : 'Your Name'
              }
              description={this.state.company || 'Company Name'}
            />
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <TasksCard
              goalCount={this.state.newGoalCount}
              employee={this.props.location.state.employeeIdSelected}
            />
          </ItemGrid>
        </Grid>
        {goalCards}
      </div>
    );
  }
}

export default EmployeeProfile;
