import React from "react";
import WizardComponent from './WizardComponent';

class Kvittens extends WizardComponent {
    constructor(props) {
        super(props);
        this.validated = true;
    }
    render() {
       return (
        <div>Kvittens!</div>
       );
    }
 }

 export default Kvittens;