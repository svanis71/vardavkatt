import React from "react";
import YesNoAlternatives from "./YesNoAlternatives";
import WizardComponent from './WizardComponent';

class Step1 extends WizardComponent {
    constructor(props) {
        super(props);
        this.fraga = 'Vad heter katten?';
        this.state = {
            givenValue: ""
        };
    }

    handleChange = (event) => {
        console.log(event.target.data);
        this.setValid(event.target.data);
        this.setState({
            givenValue: event.target.data
        });
    };

    render() {
       return (
        <div onClick={this.handleChange}>
            <h1>Fråga 1</h1>
            <p>{this.fraga}</p>
            <YesNoAlternatives />
            <div>{this.state.givenValue}</div>
        </div>
       );
    }
 }

 export default Step1;