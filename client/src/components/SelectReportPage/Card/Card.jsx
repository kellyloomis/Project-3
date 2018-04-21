import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.css"

import {
  Button
} from "./../../../components";

/*
<Link to="/dashboard" className="w3-bar-item w3-button">
                        Submit
                   </Link>
*/
class Card extends Component {
    state = {
        start: "",
        end: ""
    };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    render() {
        return (
            <div className="w3-third key={this.props.key}">
                <div className="w3-card w3-container">
                    <h3>{this.props.title}</h3><br/>
                    <i className="fa fa-user w3-margin-bottom w3-text-theme"></i>
                    <p>{this.props.text1}</p>
                    <p>{this.props.text2}</p>
                    <form>
                        <div className="row">
                            <div className="col">
                                <input onChange={this.handleInputChange} name="start" id="start" type="date" className="form-control" placeholder="mm/dd/yyyy"/>
                            </div>
                            to
                            <div className="col">
                                <input onChange={this.handleInputChange} name="end" id="end" type="date" className="form-control" placeholder="mm/dd/yyyy"/>
                            </div>
                        </div>
                    </form>
                    <br/>
                   <Button component={Link} to={{pathname: "/dashboard", state: {start: this.state.start, end: this.state.end}}} color="warning">Submit</Button>
                </div>
            </div>
        );
    } 
}

export default Card;
