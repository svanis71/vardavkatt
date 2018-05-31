import React, { Component } from "react";

class YesNoAlternatives extends Component {
    constructor(props) {
        super(props);
    }

    onSelectionMade = (selection) => {
        console.log(selection);

    };

    render() {
       return (
           <div>
               <button onClick={() => this.onSelectionMade("no")}>No</button>
               <button onClick={() => this.onSelectionMade("yes")}>Yes</button>
           </div>
       );
    }
 }

export default YesNoAlternatives;