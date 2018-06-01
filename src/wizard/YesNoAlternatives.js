import React, { Component } from "react";

class YesNoAlternatives extends Component {
    render() {
       return (
           <div>
               <button className={"primar " + (this.props.currentAnswer === 'no' ? 'active' : '')} onClick={() => this.props.onValidAnswer("no")}>No</button>
               <button className={"primar " + (this.props.currentAnswer === 'yes' ? 'active' : '')} onClick={() => this.props.onValidAnswer("yes")}>Yes</button>
           </div>
       );
    }
}

export default YesNoAlternatives;