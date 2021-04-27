import React from 'react';
import Button from "./Button";

function Card(props) {
        return (
            <div className='card'>
                <div className="card-image">
                    <img src={props.i.image} alt="sss"/>
                </div>
                <div className="card-info">
                    <div className="card-name">{props.i.name}</div>
                    <div className='card-rating'>{props.i.rating}</div>
                    <div className="card-price">{props.i.price} ₽</div>
                    <div className='card-button'>
                    </div>
                </div>
                <Button buttonClick={props.buttonClick} bought={props.bought} id={props.id}/>
            </div>
        );
}
export default Card;