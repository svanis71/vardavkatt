import { Component } from "react";
import Speaker from '../Speaker';

class WizardComponent extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.isValidated = this.isValidated.bind(this);
        this.fraga = '';
        this.validated = false;
    };

    componentDidMount() {
        Speaker.speak(this.fraga);
    }

    componentWillUnmount() {
        Speaker.cancel();
    }

    setValid(val) {
        this.validated = true
        Speaker.cancel();
        Speaker.speak('Du valde värde: ' + val);
    }

    isValidated() {
        console.log('kontrollera validering');
        if (!this.validated) {
            Speaker.speak('Du måste göra ett val innan du kan gå vidare');
        }
        return this.validated;
    }
}

export default WizardComponent;