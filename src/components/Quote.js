import React from 'react'

export default function Quote(props) {
    const quote = props.quote;
    return (
        <div className="container">
            <div id="quote">{quote.Quote}</div>
            <div id="author">- {quote.Author}</div>
        </div>
    )
}
