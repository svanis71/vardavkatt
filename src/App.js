import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./page/Header";
import Footer from "./page/Footer";
import Home from "./Home";
import Wizard from './wizard/Wizard';

class App extends Component {
    componentWillMount() {
        console.log('willMOunt');
    }
    render() {
        return (
            <div className="App">
                <Header />
                <Router>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/wizard" component={Wizard} />
                   </div>
                </Router>
                <Footer />
            </div>
        );
    }
}

export default App;
