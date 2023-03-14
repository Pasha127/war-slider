import React from "react";

const RegisterBtn = () => {              //Register button component                                        
    return (
        <div className="registration-button"   //Register button class contains instance of the button mixin
        onClick={(e) => {
            e.preventDefault();
            window.location.href='https://eu.wargaming.net/registration/en/';  //Redirects to the registration page of WoT
        }}
        >
            <p>REGISTRATION</p>
        </div>
    )
};

export default RegisterBtn;