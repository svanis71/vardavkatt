import React, { Component } from "react";
import Header from "./page/Header";
import Footer from "./page/Footer";
import Wizard from './wizard/Wizard';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <article>
                    <Wizard />
                </article>
                <Footer />
            </div>
        );
    }
}

export default App;
