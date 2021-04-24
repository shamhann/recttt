import React from 'react';
import logo from './full-word.svg'
function Logo(props) {
    return (
        <div className='logo'>
            <img src={logo} alt='logo'/>
        </div>
    );
}

export default Logo;