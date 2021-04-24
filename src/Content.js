import React from 'react';
import Card from "./Card";

function Content(props) {
    return (
        <div className='content'>
            {props.buttonClick}
            {props.products}
            <Card/>
        </div>
    );
}

export default Content;