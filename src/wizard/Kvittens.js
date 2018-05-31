import React, { Component } from "react";
import WizardComponent from './WizardComponent';

class Kvittens extends Component {
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