import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/img/cloud-svgrepo-com.svg'
import './navbar.scss'
import {useDispatch} from "react-redux";
import { logout } from '../../redux/reducers/userReducer';

type Props = {
    isAuth: any
}

const Navbar: FC<Props> = ({isAuth}) => {

    const dispatch = useDispatch()
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none me-2">
                        <img src={logo} alt="" width={50} height={50}/>
                    </a>
                    { isAuth && <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">About</a></li>
                    </ul>}
                    { !isAuth && <div className="text-end d-flex">
                        <NavLink className="nav-link px-4 text-white header-link me-2 " activeClassName="active"
                                 to="/login">Login</NavLink>
                        <NavLink className="nav-link btn-warning px-4 text-white header-link " activeClassName="active"
                                 to="/registration">Registration</NavLink>
                    </div>}
                    { isAuth &&  <NavLink className="nav-link px-4 text-white header-link me-2 " activeClassName="active"
                              to="/login" onClick={() => dispatch(logout())}>Logout</NavLink>}
                </div>
            </div>
        </header>

    );
}

export default Navbar;
