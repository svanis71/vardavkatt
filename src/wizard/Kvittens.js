import React, { Component } from "react";
import Speaker from "../Speaker";

class Kvittens extends Component {
    constructor(props) {
        super(props);
        this.validated = true;
        this.rubrik = "Tack för din Ansökan"
    }
    componentDidMount() {
        Speaker.speak(this.rubrik);
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
            <h1>{this.rubrik}</h1>
            <p>
                <a href="/" className="button primar">Gå tillbaka till startsidan</a>
            </p>
        </div>
       );
    }
 }

 export default Kvittens;