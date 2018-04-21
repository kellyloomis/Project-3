import React, { Component } from 'react';

import _map from 'lodash/map';
import { Grid, Row, Col } from 'react-bootstrap';

import Button from './elements/CustomButton/CustomButton';
import Input from './elements/CustomInput/CustomInput';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';

import ImageHeader from './ImageHeader';

import './../../assets/css/bootstrap.css';
import './css/App.css';
import './css/demo.css';

import { team } from './mock-data.js';

class Landing extends Component {
  render() {
    return (
      <div className="index-page">
        <Header />

        <ImageHeader />
        <div className="main main-raised">
          <Grid>
            <div className="section text-center section-landing">
              <Row>
                <Col md={8} mdOffset={2}>
                  <h2 className="title">
                    The Performance Review Application Of Your Dreams
                  </h2>
                  <h5 className="description">
                    Our application allows managers to simply track their
                    employee’s goals and performance on a weekly basis. Managers
                    will utilize existing templates, with the option of
                    customizing, to individually score each employee on a scale
                    of: below expectations, meets expectations, exceeds
                    expectations. Managers will have a required text box for
                    each question to briefly explain why the selected
                    option/score was given.
                  </h5>
                </Col>
              </Row>

              <div className="features">
                <Row>
                  <Col md={4}>
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="material-icons">chat</i>
                      </div>
                      <h4 className="info-title">Engaging</h4>
                      <p>Progress Made Fun</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="material-icons">verified_user</i>
                      </div>
                      <h4 className="info-title">Accurate</h4>
                      <p>Clarity Through Simplicity</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="info">
                      <div className="icon icon-danger">
                        <i className="material-icons">fingerprint</i>
                      </div>
                      <h4 className="info-title">Secure</h4>
                      <p>Only The Best Intentions</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className="section text-center">
              <h2 className="title">Our Team</h2>

              <div className="team">
                <Row>
                  {_map(team, item => {
                    return (
                      <Col key={item.id} md={6}>
                        <Profile
                          img={item.img}
                          imgSize={170}
                          description={item.description}
                          name={item.name}
                          role={item.role}
                          links={item.links}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </div>

            <div className="section landing-section">
              <Row>
                <Col md={8} mdOffset={2}>
                  <h2 className="text-center title">Connect with us</h2>
                  <h4 className="text-center description">
                    We accept funding through your generous donations! With
                    every donation of $999+ we will plant a tree & adopt a
                    puppy!
                  </h4>
                  <form className="contact-form">
                    <Row>
                      <Col md={6}>
                        <Input label="Name" type="text" />
                      </Col>
                      <Col md={6}>
                        <Input label="Email" type="email" />
                      </Col>
                    </Row>

                    <Input label="Your Pledge" type="textarea" rows="4" />

                    <div className="text-center">
                      <Button bsStyle="primary">Send Message</Button>
                    </div>
                  </form>
                </Col>
              </Row>
            </div>
          </Grid>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Landing;
