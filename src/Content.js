import React from 'react';
import Card from "./Card";

function Content(props) {

    return (
        <div className='content'>
            {props.database.map((i, id) => {
                return (
                    <Card buttonClick={props.buttonClick}
                          setDatabase={props.setDatabase}
                          id = {id}
                          i={i}/>
                      )
            })
            }
        </div>
        )
}


export default Content;