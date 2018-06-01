import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    componentDidMount() {
        sessionStorage.removeItem('form');
        sessionStorage.removeItem('step');
    }
    render() {
        const storedSettings = sessionStorage.getItem("settings");
        const settings = storedSettings ? JSON.parse(storedSettings) : {
            playSound: true,
            autoContinue: false,
            language: "Swedish Female",
            rate: 1.0
        }

        const langText = settings.language === 'Swedish Female' ? 'kvinnlig' : 'manlig';
        const rateText = settings.rate > 1 ? 'snabb' : settings.rate < 1 ? 'lugn' : 'normal';

        if (!settings.playSound) {
            this.summary = "Du har ställt in att inte använda ljud vid inmatning.";
        } else {
            this.summary = `Ljudinmatning är aktiverat med ${langText} röst, ${rateText} läsning.`;
        }

        this.summary2 = settings.autoContinue
            ? 'Vid svar påbörjas nästa fråga automatiskt.'
            : 'Vid svar påbörjas inte nästa fråga automatiskt.';

        return (
            <div>
                <h1>Välkommen!</h1>

                <p>Du kommer strax att få besvara ett antal frågor.
                </p>

                <p>{this.summary}</p>
                <p>{this.summary2}</p>

                <div className="menu">
                    <Link to="/wizard" className="menu-item">
                        <span className="menu-icon">
                            <i className="fab fa-wpforms" />
                        </span>
                        <span className="menuText">Starta ansökan</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;
