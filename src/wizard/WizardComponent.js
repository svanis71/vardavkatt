import { Component } from "react";

class WizardComponent extends Component {
    constructor(props) {
        super(props);
        this.isValidated = this.isValidated.bind(this);
        this.validated = false;
    };

    isValidated() {
        console.log('kontrollera validering');
        return this.validated;
    }
 }

 export default WizardComponent;