import React from "react";
import WizardComponent from './WizardComponent';

class Step1 extends WizardComponent {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('handleClick');
        this.validated = !this.validated;
    }

    render() {
       return (
        <div>
            <h1>Fråga 1</h1>
            <button onClick={this.handleClick}>Ja</button>
            <button onClick={this.handleClick}>Nej</button>
        </div>
       );
    }
 }

 export default Step1;