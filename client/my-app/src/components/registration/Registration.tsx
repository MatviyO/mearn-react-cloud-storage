import React from 'react'
import Input from "../input/Input";

const Registration = () => {
    return(
        <div className="registration">
            <div className="registration__header">Registration</div>
            <Input type="text" placeholder="Enter..." />
            <Input type="text" placeholder="Enter..." />
            <Input type="text" placeholder="Enter..."/>
            <Input type="text" placeholder="Enter..."/>
            <button className="registration__button">Login</button>
        </div>
    );
}

export default Registration;
