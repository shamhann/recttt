import React from 'react';

function Button(props) {

    return (
        <Button className='btn' onClick={() => props.buttonClick(props.id) }
                disabled={props.i.bought}>
            {props.i.bought ? 'Добавлено в корзину' : 'Добавить в корзину'}
        </Button>
    );
}

export default Button;