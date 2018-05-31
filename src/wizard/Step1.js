import React, { Component } from "react";
import WizardComponent from './WizardComponent';

class Step1 extends WizardComponent {
    constructor(props) {
        super(props);
    }
    
    render() {
       return (
        <div>Step 1</div>
       );
    }
 }

 export default Step1;