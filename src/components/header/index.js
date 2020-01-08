import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './styles.scss';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Link to="/" className="header__item">Список персонажей</Link>
                <Link to="/template" className="header__item">Блок с версткой</Link>
            </div>
        )
    }
}

export default Header;
