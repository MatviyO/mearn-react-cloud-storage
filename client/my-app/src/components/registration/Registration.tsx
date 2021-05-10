import React, {useState} from 'react'
import Input from "../input/Input";
import {registration} from "../../actions/user";

const Registration = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="container">
            <div className="text-center">

                <main className="form-signin mt-5">

                    <form onSubmit={(e) => e.preventDefault()}>
                        <img className="mb-3 mt-3" src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt=""
                             height="57"/>
                        <h1 className="h3 mb-3 fw-normal">Registration</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput"
                                   value={email} onChange={(value) =>  setEmail(value.target.value)}
                                   placeholder="Enter email..."/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword"
                                   value={password} onChange={(value) =>  setPassword(value.target.value)}
                                   placeholder="Enter password..."/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>

                        <button className="w-100 btn btn-lg btn-primary" type="button" onClick={() => registration(email, password)}>Registration</button>
                        <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                    </form>
                </main>
            </div>
        </div>

    );
}

export default Registration;
