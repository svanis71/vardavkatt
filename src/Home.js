import React, { Component } from "react";
import { Link } from "react-router-dom";
import Speaker from './Speaker';

class Home extends Component {
    componentDidMount() {
        Speaker.speak('Hejsan och varmt Välkommen till vårt talstyrda formulär för Kattbidrag');
    }
    componentWillUnmount() {
        Speaker.cancel();
    }
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