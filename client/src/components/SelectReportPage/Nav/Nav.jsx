import React, { Component } from "react";

import "./Nav.css"

class Nav extends Component {
    render() {
        return (
            <nav className="w3-sidebar w3-bar-block w3-card w3-animate-left w3-center" id="mySidebar">
                <h1 className="w3-xxxlarge w3-text-theme">Side Navigation</h1>
                <button className="w3-bar-item w3-button" onClick="w3_close()">Close <i className="fa fa-remove"></i></button>
                <a href="{#}" className="w3-bar-item w3-button">Link 1</a>
                <a href="{#}" className="w3-bar-item w3-button">Link 2</a>
                <a href="{#}" className="w3-bar-item w3-button">Link 3</a>
                <a href="{#}" className="w3-bar-item w3-button">Link 4</a>
            </nav>
        );
    } 
}

export default Nav;
