import React, { Component } from "react";
// import WizardComponent from './WizardComponent';

class Kvittens extends Component {
    constructor(props) {
        super(props);
        this.validated = true;
    }
    componentDidMount() {
        const url = 'https://kattbidraget.herokuapp.com/ansokan';
        const data = {"namn": "", "alder": "", "franDatum": "", "tomDatum": "", "orsak": []}
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
    }

    render() {
       return (
        <div>
            <h1>Tack för din ansökan</h1>
            <p>
                <a href="/" className="button primar">Gå tillbaka till startsidan</a>
            </p>
        </div>
       );
    }
 }

 export default Kvittens;