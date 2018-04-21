import React, { Component } from 'react';
import { Grid } from 'material-ui';
import { AddAlert } from "material-ui-icons";
import API from './../../api/API';

import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid,
  Snackbar
} from './../../components';

import avatar from './../../assets/img/vader.jpg';

class UserProfile extends Component {
  state = {
    user: JSON.parse(sessionStorage.getItem('user')),
    company: '',
    username: '',
    email: '',
    firstname: '',
    lastname: '',
    tc: false
  };

  componentDidMount() {
    if (this.state.user) {
      this.setState({
        username: this.state.user.username,
        company: this.state.user.companyName || '',
        email: this.state.user.email,
        firstname: this.state.user.firstname || '',
        lastname: this.state.user.lastname || ''
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

  // When the form is submitted, use the API.updateUser method to save the new User data
  handleFormSubmit = event => {
    event.preventDefault();
    API.updateUser(this.state.user.id, {
      username: this.state.username,
      companyName: this.state.company,
      email: this.state.email,
      firstname: this.state.firstname,
      lastname: this.state.lastname
    })
      .then(res => {
        console.log(res);
        // We update the user held in session storage
        API.getUser({ uid: this.state.user.firebaseId })
          .then(res => {
            console.log('API returns:');
            console.log(res);
            sessionStorage.setItem('user', JSON.stringify(res.data[0]));
            this.showNotification("tc");
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
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
          color="info"
          icon={AddAlert}
          message="Profile successfully updated!"
          open={this.state.tc}
          closeNotification={() => this.setState({ tc: false })}
          close
        />
        <Grid container>
          <ItemGrid xs={12} sm={12} md={8}>
            <RegularCard
              cardTitle="Edit Profile"
              cardSubtitle="Complete your profile"
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
                    <ItemGrid xs={12} sm={12} md={12}>
                      <CustomInput
                        labelText="Username"
                        id="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={12}>
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
                        value={this.state.firstname}
                        onChange={this.handleInputChange}
                        name="firstname"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={6}>
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
                  </Grid>
                </div>
              }
              footer={
                <Button onClick={this.handleFormSubmit} color="primary">
                  Update Profile
                </Button>
              }
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <ProfileCard
              avatar={avatar}
              subtitle="Manager"
              title={
                this.state.firstname && this.state.lastname
                  ? this.state.firstname + ' ' + this.state.lastname
                  : 'Your Name'
              }
              description={this.state.company || 'Company Name'}
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
