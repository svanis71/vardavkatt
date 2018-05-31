import React, { Component } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import Speaker from "./Speaker";
=======
>>>>>>> 498444720bc7b8d21300201abe482634a38305c3

class Home extends Component {
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
