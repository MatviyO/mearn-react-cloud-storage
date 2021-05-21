import React, {useEffect} from 'react';
import Navbar from "./components/navbar/Navbar";
import './app.scss'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Registration from "./components/registration/Registration";
import Login from "./components/login/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./services/user";
import Disk from "./components/disk/DIsk";
import {IStateReducer} from "./interfaces/IStateReducer";


function App() {
    const isAuth = useSelector<IStateReducer>(state => state.user.isAuth)
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
