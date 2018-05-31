import { Component } from "react";
import Speaker from '../Speaker';

class WizardComponent extends Component {
    constructor(props) {
        super(props);
        this.isValidated = this.isValidated.bind(this);
        this.validated = false;
    };

    isValidated() {
        console.log('kontrollera validering');
        if (!this.validated) {
            Speaker.speak('Du måste göra ett val innan du kan gå vidare');
        }
        return this.validated;
    }
 }

 export default WizardComponent;