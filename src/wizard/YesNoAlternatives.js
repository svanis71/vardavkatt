import React, { Component } from "react";

class YesNoAlternatives extends Component {
    render() {
       return (
           <div>
               <button className={"primar " + (this.props.currentAnswer === 'nej' ? 'active' : '')} onClick={() => this.props.onValidAnswer("nej")}>Nej</button>
               <button className={"primar " + (this.props.currentAnswer === 'ja' ? 'active' : '')} onClick={() => this.props.onValidAnswer("ja")}>Ja</button>
           </div>
       );
    }
}

export default YesNoAlternatives;