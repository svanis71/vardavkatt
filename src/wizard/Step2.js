import React, { Component } from "react";
import YesNoAlternatives from "./YesNoAlternatives";
import WizardComponent from './WizardComponent';
import Listener from '../Listener.service';

class Step2 extends Component {
    constructor(props) {
        super(props);
        this.validated = false;
        this.state = {
            givenValue: ""
        };

        this.listener = new Listener();
        this.listener.test();
    }

    handleChange = (event) => {
        console.log(event.target.data);
        this.setValid();
        this.setState({
            givenValue: event.target.data
        });
    };


    render() {
       return (
           <div onClick={this.handleChange}>
               <div>Step 2</div>
               <YesNoAlternatives />
               <div>{this.state.givenValue}</div>
           </div>
       );
    }
 }

 export default Step2;