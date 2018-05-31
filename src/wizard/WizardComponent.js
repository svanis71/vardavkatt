import React, { Component } from "react";

class WizardComponent extends Component {
    constructor(props) {
        super(props);
        this.isValidated = this.isValidated.bind(this);
    };

    isValidated() {
        console.log('kontrollera validering');
        return true;
    }
 }

 export default WizardComponent;