import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.css"

class Card extends Component {
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
                                <input type="text" className="form-control" placeholder="mm/dd/yyyy"/>
                            </div>
                            to
                            <div className="col">
                                <input type="text" className="form-control" placeholder="mm/dd/yyyy"/>
                            </div>
                        </div>
                    </form>
                    <br/>
                    <Link to="/dashboard" className="w3-bar-item w3-button">
                        Submit
                   </Link>
                </div>
            </div>
        );
    } 
}

export default Card;
