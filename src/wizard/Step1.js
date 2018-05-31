import React, { Component } from "react";
import WizardComponent from './WizardComponent';
import YesNoAlternatives from "./YesNoAlternatives";

class Step1 extends Component {
    constructor(props) {
        super(props);
    }

    isValidated() {
        return this.props.getStore().step1 !== null;
        // TODO: Speaker här om att det är obligatoriskt        
    }

    isValid(val) {
        return !!val && ['yes', 'no'].indexOf(val.toLowerCase()) > -1;
    }

    onValidAnswer = (answer) => {
        this.props.updateStore({step1: answer});
    }

    render() {
       return (
        <WizardComponent fraga="Är katten sjuk?" isValid={this.isValid} onValidAnswer={this.onValidAnswer}>
            <YesNoAlternatives onValidAnswer={this.onValidAnswer} currentAnswer={this.props.getStore().step1} />            
        </WizardComponent>
       );
    }
 }

 export default Step1;