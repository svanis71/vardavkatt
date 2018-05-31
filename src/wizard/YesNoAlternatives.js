import React, { Component } from "react";

class YesNoAlternatives extends Component {
    constructor(props) {
        super(props);
    }

    render() {
       return (
           <div>
               <button className="primar" onClick={() => this.props.onValidAnswer("no")}>No</button>
               <button className="primar" onClick={() => this.props.onValidAnswer("yes")}>Yes</button>
               <p>Aktuellt val: {this.props.currentAnswer}</p>
           </div>
       );
    }
}

export default YesNoAlternatives;