import React from "react";

const RegisterBtn = () => {
    return (
        <div className="registration-button"
        onClick={(e) => {
            e.preventDefault();
            window.location.href='https://eu.wargaming.net/registration/en/';
        }}
        >
            <p>REGISTRATION</p>
        </div>
    )
};

export default RegisterBtn;