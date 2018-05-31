import React, { Component } from "react";
import Header from './Header';
import logo from "./img/cat.svg";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <article />
                <footer />
            </div>
        );
    }
}

export default App;
