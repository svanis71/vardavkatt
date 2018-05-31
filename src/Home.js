import React, { Component } from "react";
import { Link } from "react-router-dom";
import Speaker from "./Speaker";

class Home extends Component {
    componentDidMount() {
        sessionStorage.removeItem('form');
        sessionStorage.removeItem('step');
    }
    render() {
        return (
            <div className="menu">
                <Link to="/wizard" className="menu-item">
                    <span className="menu-icon">
                        <i className="fab fa-wpforms" />
                    </span>
                    <span className="menuText">Gå till formular</span>
                </Link>
            </div>
        );
    }
}

export default Home;
