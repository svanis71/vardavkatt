import React, { Component } from "react";
import { createBrowserHistory } from "history";
import Checkbox from './Components/Checkbox';
import { SpeakerRates, SpeakerLanguages } from './Constants';

export default class Settings extends Component {
    state = {};
    defaultSettings = {};

    super(props) {
        this.defaultSettings = props.defaultSettings;
    }

    componentDidMount() {
        const savedState = sessionStorage.getItem("settings");
        if (savedState) {
            this.setState(JSON.parse(savedState));
        } else {
            this.setState({
                playSound: true,
                language: SpeakerLanguages["Svensk kvinnlig"],
                rate: SpeakerRates.medium,
                pitch: 1,
                autoContinue: false
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
        return (
            <form onSubmit={this.onSubmit} className="setting-page">
                <button type="submit" title="Tillbaka till föregående">
                    <i className="fas fa-angle-left" />
                </button>
                <header>
                    <h2>Inställningar</h2>
                </header>
                <span className='legend'>Nästa steg vid svar</span>
                <section className="fieldset autocontinue">
                    <Checkbox id="autocontinue" name="autocontinue"
                        caption="På/av"
                        checked={this.state.autoContinue}
                        handleClick={chk => this.setState({ autoContinue: chk })} />
                </section>
                <span className='legend'>Ljud</span>
                <section className="fieldset playsound">
                    <Checkbox id="playsound" name="playsound" caption="På/av" checked={this.state.playSound}
                        handleClick={chk => this.setState({ playSound: chk })} />
                </section>
                <section className="fieldset language">
                    <label htmlFor="language">Språk</label>
                    <select
                        name="languageSelect"
                        id="language"
                        value={this.state.language}
                        onChange={e =>
                            this.setState({ language: e.target.value })
                        }
                    >
                        {SpeakerLanguages.map(l => <option value={l.value}>{l.name}</option>)}
                    </select>
                </section>
                    <span className='legend'>Uppläsningshastighet</span>
                <section id="rate-section" className="fieldset rate" onChange={(e) => this.setState({ rate: Number(e.target.value) })}>
                    <section className="slow">
                        <input type="radio" name="rate" id="rate-slow" value={SpeakerRates.slow} checked={this.state.rate === SpeakerRates.slow} />
                        <label htmlFor="rate-slow">Långsam</label>
                    </section>
                    <section className="medium">
                        <input type="radio" name="rate" id="rate-medium" value={SpeakerRates.medium} checked={this.state.rate === SpeakerRates.medium} />
                        <label htmlFor="rate-medium">Medium</label>
                    </section>
                    <section className="fast">
                        <input type="radio" name="rate" id="rate-fast" value={SpeakerRates.fast} checked={this.state.rate === SpeakerRates.fast} />
                        <label htmlFor="rate-fast">Snabb</label>
                    </section>
                </section>
            </form>
        );
    }
}
