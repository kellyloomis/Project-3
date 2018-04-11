import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./Header.css"

class Header extends Component {
    render() {
        return (
            <header className="w3-container w3-theme w3-padding" id="myHeader">
                <i onclick="w3_open()" className="fa fa-bars w3-xlarge w3-button w3-theme"></i> 
                <div className="w3-center">
                    <h4>Peak Performance</h4>
                    <h1 className="w3-xxxlarge w3-animate-bottom">
                        Select Report
                    </h1>
                </div>
            </header>
        );
    } 
}

export default Header;
