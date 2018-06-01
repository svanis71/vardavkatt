import React, {Component} from 'react';
import WizardComponent from './WizardComponent';
import { DateAlternatives } from './DateAlternatives';

export default class Step4 extends Component {
    constructor(props) {
        super(props);
    }

    isValidated() {
        return this.props.getStore()[this.props.stepName] !== null;
        // TODO: Speaker här om att det är obligatoriskt
    }

    isValid(val) {
        return !!val;
    }

    onValidAnswer = (answer) => {
        let date = new Date();
        if(answer === 'igår') {
            date = new Date(date.getTime() - (24*3600*1000));
        }
        this.props.updateStore({[this.props.stepName]: date.toLocaleDateString()});
    }

    render() {
       return (
        <WizardComponent
            fraga={this.props.fraga}
            isValid={this.isValid}
            onValidAnswer={this.onValidAnswer}
            onNext={() => this.props.jumpToStep(4)}
            currentAnswer={this.props.getStore()[this.props.stepName]}
        >
            <DateAlternatives
                onValidAnswer={this.onValidAnswer}
                currentAnswer={this.props.getStore()[this.props.stepName]} />
        </WizardComponent>
       );
    }
}