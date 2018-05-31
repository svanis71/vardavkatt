import React, { Component } from "react";

export default class Settings extends Component {
    state = {};
    originalSettings = {};

    super(props) {
        this.originalSettings = props.currentSettings;
    }

    componentDidMount() {
        this.setState({
            playSound: true,
            language: "Swedish female",
            rate: 1.5,
            pitch: 1,
        });
    }

    render() {
        return (
            <div className="setting-page">
                <section className="playsound">
                    <label htmlFor="playsound">Ljud på/av</label>
                    <input
                        type="checkbox"
                        id="playsound"
                        checked={this.state.playSound}
                    />
                </section>
                <section className="language">
                    <label htmlFor="language">Språk</label>
                    <select
                        name="languageSelect"
                        id="language"
                        value={this.state.language}
                    >
                        <option value="Swedish Female">Svensk kvinnlig</option>
                        <option value="Swedish Female">Svensk manlig</option>
                    </select>
                </section>
                <section className="rate">
                    <label htmlFor="rate">Uppläsningshastighet</label>
                    <input
                        type="range"
                        name="rate"
                        id="rate"
                        min="0"
                        max="1.5"
                        step="0.5"
                        value={this.state.rate}
                    />
                </section>
            </div>
        );
    }
}
