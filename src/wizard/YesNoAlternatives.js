import React, { Component } from "react";
import PropTypes from "prop-types";

class YesNoAlternatives extends Component {
    constructor(props) {
        super(props);
    }

    onSelectionMade = (selection, event) => {
        event.target.data = selection;
    };

    render() {
       return (
           <div>
               <button onClick={(event) => this.onSelectionMade("no", event)}>No</button>
               <button onClick={(event) => this.onSelectionMade("yes", event)}>Yes</button>
           </div>
       );
    }
}

YesNoAlternatives.defaultProps = {
    givenValue: "none"
};

YesNoAlternatives.propTypes = {
    givenValue: PropTypes.string
};

export default YesNoAlternatives;