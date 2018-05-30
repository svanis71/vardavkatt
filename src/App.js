import React, { Component } from "react";
import logo from "./img/cat.svg";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Ansök om vård av katt</h1>
                </header>
                <article />
                <footer />
            </div>
        );
    }
}

export default App;
