import React from "react";
import WizardComponent from './WizardComponent';

class Step3 extends WizardComponent {
    constructor(props) {
        super(props);
        this.validated = true;
    }
    render() {
       return (
        <div>Step 3</div>
       );
    }
 }

 export default Step3;