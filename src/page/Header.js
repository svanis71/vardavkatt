import React, { Component } from "react";
import logo from "../img/cat.svg";

class Header extends Component {
    render() {
       return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Ansök om vård av katt</h1>
        </header>
       );
    }
 }

 export default Header;