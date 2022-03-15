import React from 'react';
import logo from './bobs-burger-logo.png'; 

function Header() {

    return (
        <header>
            <img src={logo} className="main-logo" />
        </header>
    );
}

export default Header;