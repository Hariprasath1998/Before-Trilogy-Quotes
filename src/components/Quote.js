import React from 'react'

export default function Quote(props) {
    return (
        <div className="Quotes-Container">
            <div id="quote">{props.quote.Quote}</div>
            <div id="author">- {props.quote.Author}</div>
        </div>
    )
}
