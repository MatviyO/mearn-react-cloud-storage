import React, {useEffect} from 'react';
import Navbar from "./components/navbar/Navbar";
import './app.scss'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Registration from "./components/registration/Registration";
import Login from "./components/login/Login";
import {useDispatch, useSelector} from "react-redux";
import {ISelector} from "./interfaces/IStateReducer";
import {auth} from "./actions/user";
import Disk from "./components/disk/DIsk";


function App() {
    const isAuth = useSelector<ISelector>(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [])
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar isAuth={isAuth}/>
                {
                    !isAuth ?  <Switch>
                        <Route path="/registration" component={Registration}/>
                        <Route path="/login" component={Login}/>
                        <Redirect to="/" />
                    </Switch>
                        : <Switch>
                            <Route exact path="/" component={Disk}/>
                            <Redirect to="/" />
                        </Switch>
                }
            </div>
        </BrowserRouter>
    );
}

export default App;
