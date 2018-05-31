import React, { Component } from "react";
import { Link } from "react-router-dom";
import Speaker from "./Speaker";

class Home extends Component {
    componentDidMount() {
        sessionStorage.removeItem('form');
    }
    render() {
        return (
            <div>
                Startsida
                <Link to="/wizard">Gå till formular</Link>
                <Link to="/settings">Inställningar</Link>
            </div>
        );
    }
}

export default Home;
