import React, { Component } from "react";
import WizardComponent from './WizardComponent';
import YesNoAlternatives from "./YesNoAlternatives";

class Step3 extends Component {
    state = {
        text: ''
    }
    constructor(props) {
        super(props);
    }

    isValidated() {
        return this.props.getStore()[this.props.stepName] !== null;        
    }

    isValid(val) {
        return val && val.length;
    }

    onValidAnswer = (answer) => {
        this.props.updateStore({ [this.props.stepName]: answer });
    }

    textBlurrad = (e) => {
        this.onValidAnswer(e.currentTarget.value);
    }

    render() {
        return (
            <WizardComponent
                fraga={this.props.fraga}
                isValid={this.isValid}
                onValidAnswer={this.onValidAnswer}
                onNext={() => this.props.jumpToStep(3)}
                currentAnswer={this.props.getStore()[this.props.stepName]}
            >
                <label htmlFor="kattnamn"></label>

                <input
                    id="kattnamn"
                    type="text"
                    value={this.state.text}
                    onChange={e => this.setState({ text: e.target.value })}
                    onBlur={e => this.textBlurrad(e)}
                />

                <p>{this.props.getStore()[this.props.stepName]}</p>
            </WizardComponent>
        );
    }
}

export default Step3;