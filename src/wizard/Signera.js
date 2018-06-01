import React, { Component } from "react";

class Signera extends Component {
    constructor(props) {
        super(props);
        this.validated = true;
    }
    render() {
       return (
        <div>
            <h1>Signera</h1>
            <p>{this.props.fragor.step1} : {this.props.getStore()['step1']}</p>
            <p>{this.props.fragor.step2} : {this.props.getStore()['step2']}</p>
            <p>{this.props.fragor.step3} : {this.props.getStore()['step3']}</p>
        </div>
       );
    }
 }

 export default Signera;