import React, { Component } from "react";
import { Link } from "react-router-dom";
import Speaker from './Speaker';

class Home extends Component {
    render() {
       return (
        <div>
            Startsida
            <Link to="/wizard">Gå till formular</Link>
        </div>
       );
    }
 }

 export default Home;