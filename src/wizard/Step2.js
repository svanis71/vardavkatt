import React, { Component } from "react";
import WizardComponent from './WizardComponent';
import YesNoAlternatives from "./YesNoAlternatives";

class Step2 extends Component {
    constructor(props) {
        super(props);
    }

    isValidated() {
        return this.props.getStore()[this.props.stepName] !== null;
        // TODO: Speaker här om att det är obligatoriskt
    }

    isValid(val) {
        return !!val && ['yes', 'no'].indexOf(val.toLowerCase()) > -1;
    }

    onValidAnswer = (answer) => {
        this.props.updateStore({[this.props.stepName]: answer});
    }

    render() {
       return (
        <WizardComponent
            fraga={this.props.fraga}
            isValid={this.isValid}
            onValidAnswer={this.onValidAnswer}
            currentAnswer={this.props.getStore()[this.props.stepName]}
        >
            <YesNoAlternatives
                onValidAnswer={this.onValidAnswer}
                currentAnswer={this.props.getStore()[this.props.stepName]} />
        </WizardComponent>
       );
    }
 }

 export default Step2;