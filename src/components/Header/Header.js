import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav-header'>
            <h1>Miah Food</h1>
            <div>
                <a href="/home">Home</a>
                <a href="/menu">Menu</a>
                <a href="/branches">Branches</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
};

export default Header;