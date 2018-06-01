import React, { Component } from "react";
import Speaker from "../Speaker";
import Listener from '../Listener.service';

class Signera extends Component {
    constructor(props) {
        super(props);
        this.validated = true;
        this.listener = new Listener();
    }
    componentDidMount() {
        Speaker.speak(`
            Signera formulär. Var god verifiera svaren.
            Fråga 1:
            ${this.props.fragor.step1}
            ${this.props.getStore()['step1']}.
            Fråga 2:
            ${this.props.fragor.step2}
            ${this.props.getStore()['step2']}.
            Fråga 3:
            ${this.props.fragor.step3}
            ${this.props.getStore()['step3']}.
        `, () => this.rostKlar());
    }

    rostKlar() {
        console.log('fråga klar');
        this.listener.startRecognition().then(result => this.hanteraSvar(result));
    }

    hanteraSvar(result) {
        console.log(result);
        if (result.indexOf('signera') > -1) {
            this.props.jumpToStep(3);
        }
        else {
            Speaker.speak("Försök igen!", () => this.rostKlar());
        }
      
    }

    render() {
       return (
        <div>
            <h1>Signera</h1>
            <p>{this.props.fragor.step1} : {this.props.getStore()['step1']}</p>
            <p>{this.props.fragor.step2} : {this.props.getStore()['step2']}</p>
        </div>
       );
    }
 }

 export default Signera;