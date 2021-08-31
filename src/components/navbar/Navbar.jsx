import React from 'react';
import './navbar.css';


const Navbar = ({inputChangeHandler}) => {
    return (
        <nav className="navbar container">
            <a href="/" className="navbar__brand">Moovie</a>
            <form className="navbar__search">
                <input type="text" onChange={inputChangeHandler}></input>
            </form>
        </nav>
    );
}

export default Navbar