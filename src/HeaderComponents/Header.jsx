import React from 'react';
import HeaderButtons from './HeaderButtons';
import HeaderBacketButton from './HeaderBacketbutton';
import HeaderLogo from './HeaderLogo';
import './ButtonsGoToHeader';
import './HeaderStyles.css';

const Header = () => {
  const showAboutUs = (param) => {
    console.log(param);
  };

  return (
    <div className="header_container" id="main_header">
      <HeaderLogo />
      <HeaderButtons name="Contacts" onClick={showAboutUs} />
      <HeaderButtons name="About Us" onClick={showAboutUs} />
      <HeaderButtons name="Support" onClick={showAboutUs} />
      <HeaderBacketButton />
    </div>
  );
};

export default Header;
