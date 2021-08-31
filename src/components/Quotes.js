import React, { useState} from 'react';
import Quote from './Quote';
import { Button } from 'react-bootstrap';

export default function Quotes(props) {
    const [number, setNumber] = useState(0);
    
    return (
        <div className="container quotes-component">
            <div className="Quotes-Container container">
            <Quote quote={props.quotes[number]} >
              
            </Quote>
            </div>
            <div id="buttonContainer" className="container">
                <Button variant="outline-light" onClick={() => setNumber(number + 1)} size="lg">Get Another</Button>{' '}
            </div>
        </div>
    )
}
