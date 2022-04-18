import React from "react";
import HeaderButtons from "./HeaderButtons";
import HeaderBacketButton from "./HeaderBacketbutton";
import classes from "./HeaderStyles.css"
import HeaderLogo from "./HeaderLogo";

const Header = () => {
    const showAboutUs = (param) =>{
    alert(param);
    }

    return (
        <div className="header_container">
            <HeaderLogo/>
            <HeaderButtons name="Contacts" onClick={showAboutUs}/>
            <HeaderButtons name="About Us" onClick={showAboutUs}/>
            <HeaderButtons name="Support" onClick={showAboutUs}/>
            <HeaderBacketButton/>
        </div>
    )
}

export default Header;
