import React, { useState} from 'react';
import Quote from './Quote';

export default function Quotes(props) {
    const [number, setNumber] = useState(0);
    console.log(number)
    // console.log(props.quotes)
    return (
        <div className="App-header">
            
            <Quote quote={props.quotes[number]} >
              
            </Quote>
            <div id="buttonContainer">
                <button id="change" onClick={() => setNumber(number + 1)}>Get Another</button>
            </div>
        </div>
    )
}
