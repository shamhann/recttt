import React from 'react';
import basket from './shopping-cart-solid.svg'
import './style.css'
function Checkout(props) {
    let f = props.database.filter((i)=>{
        if (i.bought === true){
            return i;
        }
    })
    return (
        <div className='checkout'>
            <a href='chek'>
                <img src={basket} alt='basket'/>
                <span className='counter'>
                    {f.length}
            </span>
            </a>
        </div>
    );
}

export default Checkout;