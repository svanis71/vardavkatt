import React, { Component } from "react";
import Speaker from '../Speaker';
import Listener from '../Listener.service';

class WizardComponent extends Component {
    constructor(props) {
        super(props);
        this.listener = new Listener();
    };

    componentDidMount() {
        Speaker.speak(this.props.fraga, () => this.rostKlar());
    }

    rostKlar() {
        console.log('fråga klar');
        this.listener.startRecognition().then(result => this.hanteraSvar(result));
    }

    hanteraSvar(result) {
        console.log(result);

        if (result.indexOf('ästa') > -1 || result.indexOf('esta') > -1) {
            Speaker.speak("Nästa fråga", this.props.onNext);
        } else if (this.props.isValid(result)) {
            this.props.onValidAnswer(result);
            Speaker.speak("Du svarade " + result + " säg nästa eller ange ett nytt svar.", () => this.rostKlar());
        } else {
            Speaker.speak("Kattsingen, vad säger du? En gång till.", () => this.rostKlar());
        }
    }

    render() {
        if (this.props.currentAnswer) {
            Speaker.speak(this.props.currentAnswer);
        }

        return (
            <div>
                <h1>{this.props.fraga}</h1>
                {this.props.children}
            </div>
        );
    }
}

export default WizardComponent;