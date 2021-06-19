import React, {FC, useState} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/img/cloud-svgrepo-com.svg'
import './navbar.scss'
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/action/userAction";
import {getFiles} from "../../services/file";
import {IStateReducer} from "../../interfaces/IStateReducer";
import {showLoader} from "../../redux/action/appAction";

type Props = {
    isAuth: any
}

const Navbar: FC<Props> = ({isAuth}) => {
    const [search, setSearch] = useState<string>('')
    const [searchTimeout, setSearchTimeout] = useState<any>(false)
    const currentDir = useSelector((state: IStateReducer) => state.files.currentDir)

    const dispatch = useDispatch()

    const searchFiles = (search: string) => {
        setSearch(search)
        if (searchTimeout != false) {
            clearTimeout(searchTimeout)
        }
        dispatch(showLoader())
       if(search != '') {
           setSearchTimeout(setTimeout((value) => {
               dispatch(searchFiles(value))
           }, 500, search))
       } else {
           dispatch(getFiles(currentDir, 'type'))
       }


    }
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <NavLink className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none me-2"
                             to="/"><img src={logo} alt="" width={50} height={50}/></NavLink>
                    { isAuth && <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <NavLink className="nav-link px-2 text-white"
                                 to="/">Home</NavLink>
                        <NavLink className="nav-link px-2 text-white"
                                 to="/">Features</NavLink>
                        <NavLink className="nav-link px-2 text-white"
                                 to="/">FAQs</NavLink>
                        <NavLink className="nav-link px-2 text-white"
                                 to="/animations">Animations</NavLink>
                        <div>
                            <input type="text"
                                   value={search}
                                   onChange={e => searchFiles(e.target.value)}
                                   className="form-control"/>
                        </div>
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
