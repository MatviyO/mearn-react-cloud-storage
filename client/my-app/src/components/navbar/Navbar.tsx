import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/cloud-svgrepo-com.svg'
import './navbar.scss'

const Navbar = () => {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none mr-2">
                        <img src={logo} alt="" width={50} height={50}/>
                    </a>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">About</a></li>
                    </ul>
                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2"><NavLink to="/login">Login</NavLink></button>
                        <button type="button" className="btn btn-warning"><NavLink to="/registration">Registration</NavLink></button>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Navbar;
