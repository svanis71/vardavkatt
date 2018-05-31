import React, { Component } from "react";
import Header from './page/Header';
import Footer from './page/Footer';

import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <article />
                <Footer />
            </div>
        );
    }
}

export default App;
