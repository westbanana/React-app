import React from 'react';
import logo from './Logo.png'

const HeaderLogo = () => {
    return (
        <a href="index.js">
            <img src={logo} alt="123" className='header_logo'/>
        </a>
    )

}

export default HeaderLogo;