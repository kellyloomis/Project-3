import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="/">Peak Performance</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Licenses</a>
              </li>
            </ul>
          </nav>
          <div className="copyright pull-right">
            &copy; 2018 Peak Performance.
          </div>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
