import React from 'react';

export const DateAlternatives = props => (
    <div>
        <button className={"primar " + (props.currentAnswer === 'idag' ? 'active' : '')} onClick={() => props.onValidAnswer("idag")}>Idag</button>
        <button className={"primar " + (props.currentAnswer === 'igår' ? 'active' : '')} onClick={() => props.onValidAnswer("igår")}>Igår</button>
    </div>
)