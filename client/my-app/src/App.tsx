import React from 'react';
import Navbar from "./components/navbar/Navbar";
import './app.scss'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Registration from "./components/registration/Registration";
import Login from "./components/login/Login";

function App() {
  return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
            <Switch>
                <Route path="/registration" component={Registration} />
                <Route path="/login" component={Login} />

            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
