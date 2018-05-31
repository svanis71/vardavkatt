import React, { Component } from "react";
import {
    createBrowserHistory,
    createHashHistory,
    createMemoryHistory,
} from "history";
import Checkbox from './Components/Checkbox';

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
                autoContinue: false,
                language: "Swedish female",
                rate: 1.0,
                pitch: 1,
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
                <fieldset className="autocontinue">
                    <legend>Fortsätt automatiskt till nästa steg efter inläsning</legend>
                    <Checkbox id="autocontinue" name="autocontinue"
                        caption="På/av"
                        checked={this.state.autoContinue}
                        handleClick={chk => this.setState({ autoContinue: chk })} />
                </fieldset>
                <fieldset className="playsound">
                    <legend>Ljud</legend>
                    <Checkbox id="playsound" name="playsound" caption="På/av" checked={this.state.playSound}
                        handleClick={chk=>this.setState({playSound: chk})} />
                </fieldset>
                <fieldset className="language">
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
                </fieldset>
                <fieldset id="rate-fieldset" className="rate" onChange={(e)=>this.setState({rate: Number(e.target.value)})}>
                    <legend>Uppläsningshastighet</legend>
                    <input type="radio" name="rate" id="rate-slow" value="0.5" checked={this.state.rate===0.5} />
                    <label htmlFor="rate-slow">Långsam</label>
                    <input type="radio" name="rate" id="rate-medium" value="1.0" checked={this.state.rate===1.0}/>
                    <label htmlFor="rate-medium">Medium</label>
                    <input type="radio" name="rate" id="rate-fast" value="1.6" checked={this.state.rate===1.6}/>
                    <label htmlFor="rate-fast">Snabb</label>
                </fieldset>
            </form>
        );
    }
}
