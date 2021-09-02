import React, { useState} from 'react';
import Quote from './Quote';
import { Button } from 'react-bootstrap';

export default function Quotes(props) {
    const [number, setNumber] = useState(0);
    const quotes = props.quotes;
    const length = quotes.length;
    return (
        <div className="container quotes-component">
            <div className="Quotes-Container container">
            {/* <Quote quote={props.quotes[number]} > */}
            <Quote quote={number > -1 ? quotes[number % length] : quotes[length + number]} >
              
            </Quote>
            </div>
            <div id="buttonContainer" className="container">
                <Button variant="outline-light" onClick={() => setNumber(number - 1)} size="lg">Previous</Button>{' '}
                <Button variant="outline-light" onClick={() => setNumber(number + 1)} size="lg">Next</Button>{' '}
            </div>
        </div>
    )
}
