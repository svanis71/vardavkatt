import React, { Component } from "react";
import {
    createBrowserHistory,
    createHashHistory,
    createMemoryHistory,
} from "history";

export default class Settings extends Component {
    state = {};
    originalSettings = {};

    super(props) {
        this.originalSettings = props.currentSettings;
    }

    componentDidMount() {
        const savedState = sessionStorage.getItem("settings");
        if (savedState) {
            this.setState(JSON.parse(savedState));
        } else {
            this.setState({
                playSound: true,
                language: "Swedish female",
                rate: 1.5,
                pitch: 1,
                autoNext: false
            });
        }
    }

    onSubmit = e => {
        e.preventDefault();
        sessionStorage.setItem("settings", JSON.stringify(this.state));
        const hist = createBrowserHistory();
        hist.goBack();
    };

    render() {
        const buttonStyle = {
            background: "transparent",
            border: "solid thin #999",
            borderRadius: "4px",
            width: "2em",
            height: "2em",
            fontSize: "1.5em",
        };
        return (
            <form onSubmit={this.onSubmit} className="setting-page">
                <button style={buttonStyle} type="submit">
                    <i className="fas fa-angle-left" />
                </button>
                <section className="playsound">
                    <label htmlFor="playsound">Ljud på/av</label>
                    <input
                        type="checkbox"
                        id="playsound"
                        name="playsound"
                        checked={this.state.playSound}
                        onChange={e =>
                            this.setState({ playSound: e.target.checked })
                        }
                    />
                </section>
                <section className="language">
                    <label htmlFor="language">Språk</label>
                    <select
                        name="languageSelect"
                        id="language"
                        value={this.state.language}
                        onChange={e =>
                            this.setState({ language: e.target.value })
                        }
                    >
                        <option value="Swedish Female">Svensk kvinnlig</option>
                        <option value="Swedish Male">Svensk manlig</option>
                    </select>
                </section>
                <section className="autonext">
                    <label htmlFor="autonext">Jag har tur</label>
                    <input
                        type="checkbox"
                        id="autonext"
                        name="autonext"
                        checked={this.state.autoNext}
                        onChange={e =>
                            this.setState({ autoNext: e.target.checked })
                        }
                    />
                </section>
            </form>
        );
    }
}
