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
        // this.listener.stopRecognition();
        let valid = this.props.isValid(result);
        valid && this.props.onValidAnswer(result);

        if (valid) {
            Speaker.speak("Du svarade " + result + " säg fortsätt eller ange ett nytt svar.");
        }
        else {
            Speaker.speak("Jag förstod inte. Försök igen", () => this.rostKlar());
        }
    }

    // TODO: props.isValid är en metod som returnerar bool om det inlyssnade värdet är ok
    // Använd isMounted et al

    // TODO: props.onValidAnswer: Sätt när inlyssnat giltigt svar

    render() {
        if(this.props.currentAnswer) {
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