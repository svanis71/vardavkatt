import React from "react";
import YesNoAlternatives from "./YesNoAlternatives";
import WizardComponent from './WizardComponent';

class Step2 extends WizardComponent {
    render() {
       return (
           <div>
               <div>Step 2</div>
               <YesNoAlternatives />
           </div>
       );
    }
 }

 export default Step2;