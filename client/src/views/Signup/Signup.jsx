import React, {Component} from 'react';
import { auth, provider } from './../../firebase.js';
import API from "./../../api/API";
import {
  Grid, Row, Col,
} from 'react-bootstrap';
import Button from './../../components/Signup/elements/CustomButton/CustomButton';
import Input from './../../components/Signup/elements/CustomInput/CustomInput';
import bg from './../../assets/img/city.jpg';

import './../../assets/css/App.css';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
    this.login = this.login.bind(this);
  }

  getUserId(firebaseUser) {
    API.getUser(firebaseUser)
      .then(res => {
        console.log("API returns:");
        console.log(res);
        sessionStorage.setItem("user", JSON.stringify(res.data[0]));
        this.props.history.push("/");
      });
  };

  login() {
    auth.signInWithPopup(provider) 
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
        if(user) {
          this.getUserId(user);
        }
      });
  };

  render() {
    return (
      <div className="signup-page">

        <div className="wrapper">
          <div
            className="header header-filter"
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover',  backgroundPosition: 'top center', }}
          >
            <Grid>
              <Row>
                <Col md={4} mdOffset={4} sm={6} smOffset={3}>

                  <div className="card card-signup">
                    <form>
                      <div className="header header-primary text-center">
                        <h4>Sign Up</h4>
                        <div className="social-line">
                          <Button justIcon link>
                            <i className="fa fa-facebook-square"></i>
                          </Button>
                          <Button justIcon link>
                            <i className="fa fa-twitter"></i>
                          </Button>
                          <Button justIcon link onClick={this.login}>
                            <i className="fa fa-google-plus"></i>
                          </Button>
                        </div>
                      </div>
                      <p className="text-divider">Or Be Classical</p>
                      <div className="content">
                        <Input
                          type="text"
                          placeholder="First Name..."
                          addonIcon={<i className="fa fa-user"></i>}
                        />
                        <Input
                          type="email"
                          placeholder="Email..."
                          addonIcon={<i className="fa fa-envelope"></i>}
                        />
                        <Input
                          type="password"
                          placeholder="Password..."
                          addonIcon={<i className="fa fa-lock"></i>}
                        />
                      </div>
                      <div className="footer text-center">
                        <Button bsStyle="primary" bsSize="large" link>Get Started</Button>
                      </div>
                    </form>
                  </div>

                </Col>
              </Row>
            </Grid>
          </div>
        </div>

      </div>
    );
  }
}

export default Signup;
