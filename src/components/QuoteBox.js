import React from 'react';

function QuoteBox(props) {
    return (
        <div>
            <p id='text'>{props.quote.quote}</p>
            <p id='author'>{props.quote.author }</p>
        </div>
    );
}

export default QuoteBox;