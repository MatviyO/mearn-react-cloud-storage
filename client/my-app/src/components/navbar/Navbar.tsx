import React from 'react';
import logo from '../../assets/img/cloud.png'
import './navbar.less'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <img src={logo} alt="Logo" className="navbar__logo"/>
                <div className="navbar__header">MERN CLOUD</div>
                <div className="navbar__login">Login</div>
                <div className="navbar__registration">Registration</div>
            </div>
        </div>
    );
}

export default Navbar;
