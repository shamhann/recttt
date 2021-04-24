import React from 'react';

function Menu(props) {
    return (
        <div className='menu'>
            <ul>
                <li><a href="#/clothes">Одежда</a></li>
                <li><a href="#/clothes">Детям</a></li>
                <li><a href="#/clothes">Книги</a></li>
                <li><a href="#/clothes">Компьютеры</a></li>
                <li><a href="#/clothes">Контакты</a></li>
            </ul>
        </div>
    );
}

export default Menu;