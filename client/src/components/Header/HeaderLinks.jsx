import React from "react";
import { Redirect } from 'react-router';
import {
  withStyles
} from "material-ui";
import { Search } from "material-ui-icons";

import { CustomInput, Snackbar, IconButton as SearchButton } from "./../../components";

import headerLinksStyle from "./../../variables/styles/headerLinksStyle";

import API from './../../api/API';

class HeaderLinks extends React.Component {

  state = {
    searchField: "",
    tc: false
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearch = () => {
    if(this.state.searchField) {
      let names = this.state.searchField.split(' ');
      API.getEmployeeByName(names[0], names[1])
        .then(res => {
          console.log(res);
          if(res.data.length === 0) {
            this.showNotification("tc");
          } else {
            console.log(res.data);
            this.setState({redirect: true, employeeIdSelected: res.data[0].id});
          }
        });
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
    const { classes } = this.props;
    if (this.state.redirect) {
      console.log(this.state);
      return <Redirect push to={{pathname: "/employee-profile", state: {employeeIdSelected: this.state.employeeIdSelected}}}  />;
    }
    return (
      <div>
        <Snackbar
          place="tc"
          color="primary"
          icon={Search}
          message="No employee found."
          open={this.state.tc}
          closeNotification={() => this.setState({ tc: false })}
          close
        />
        <CustomInput
          labelText="Search Employee"
          id="search"
          value={this.state.searchField}
          onChange={this.handleInputChange}
          name="searchField"
          formControlProps={{
            className: classes.top + " " + classes.search
          }}
          inputProps={{
            placeholder: "Search",
            inputProps: {
              "aria-label": "Search"
            }
          }}
        />
        <SearchButton
          color="white"
          aria-label="edit"
          onClick={this.handleSearch}
          customClass={classes.top + " " + classes.searchButton}
        >
          <Search className={classes.searchIcon} />
        </SearchButton>
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
