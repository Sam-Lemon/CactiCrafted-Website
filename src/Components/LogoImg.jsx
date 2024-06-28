import React from "react";
import logo from '../images/logo-transparent-png.png';

export default function LogoImage () {

    const logoStyle = {
        width: '5rem',
    };

    return (
        <img src={logo} style={logoStyle} alt="Logo" />
        // console.log('yes this works')
    );
}