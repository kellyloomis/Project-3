import React, {Component} from 'react';

import _map from 'lodash/map';
import { Grid, Row, Col } from 'react-bootstrap';

import Button from './elements/CustomButton/CustomButton';
import Input from './elements/CustomInput/CustomInput';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';

import ImageHeader from './ImageHeader';

import './helpers/BootstrapStyles';
import 'bootstrap/dist/css/bootstrap.css';
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
                    <h2 className="title">Product Talk!</h2>
                    <h5 className="description">
                      A paragraph about our product should go here. More details to keep user interested and likely to scroll down some more.
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
                        <h4 className="info-title">First Feature</h4>
                        <p>
                          Few lines about a feature
                        </p>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="info">
                        <div className="icon icon-success">
                          <i className="material-icons">verified_user</i>
                        </div>
                        <h4 className="info-title">Second Feature</h4>
                        <p>
                          Few lines about a feature
                        </p>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="info">
                        <div className="icon icon-danger">
                          <i className="material-icons">fingerprint</i>
                        </div>
                        <h4 className="info-title">Third Feature</h4>
                        <p>
                          Few lines about a feature
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className="section text-center">
                <h2 className="title">Here is our team</h2>

                <div className="team">
                  <Row>
                    {_map(team, item => {
                      return (
                        <Col md={6}>
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
                      We can include a call to action form for users should they have a question about our product or would
                      just like to reach out to us.
                    </h4>
                    <form className="contact-form">
                      <Row>
                        <Col md={6}>
                          <Input label="Your Name" type="text" />
                        </Col>
                        <Col md={6}>
                          <Input label="Your Email" type="email" />
                        </Col>
                      </Row>

                      <Input label="Your Messge" type="textarea" rows="4" />

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
