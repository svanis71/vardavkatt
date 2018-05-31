import React, { Component } from "react";
import Speaker from '../Speaker';

class WizardComponent extends Component {
    constructor(props) {
        super(props);        
    };

    componentDidMount() {
        Speaker.speak(this.props.fraga);
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