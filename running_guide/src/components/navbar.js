import {FaBars, FaTimes} from 'react-icons/fa';
import {useRef} from 'react';
import React from 'react';

function Nav(){
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <header>
            <a id = "nav_logo" href = "/home">Running Guide </a>
            <nav ref = {navRef}>
                <a href = "/home">Home</a>
                <a href = "/calendar">Calendar</a>
                <a href = "/map">Map</a>
                <a href = "/account">Account</a>
                <button className = "nav-btn nav-close-btn" onClick = {showNavBar}>
                    <FaTimes />
                </button>
            </nav>
                <button className = "nav-btn" onClick = {showNavBar}>
                    <FaBars />
                </button>
        </header>
    );

}

export default Nav;