import React, { useState } from 'react';
import HeaderButtons from './HeaderButtons';
import HeaderBacketButton from './HeaderBacketbutton';
import HeaderLogo from './HeaderLogo';
import './ButtonsGoToHeader';
import './HeaderStyles.css';
import Modals from './Modals/Modals';
import './Modals/Modals.css';

const Header = () => {
  const [modalActive, setModalActive] = useState(false);
  const showAboutUs = (param) => {
    console.log(param);
  };
  const showBacketModal = () => {
    setModalActive(true);
  };

  return (
    <div className="header_container" id="main_header">
      <HeaderLogo />
      <HeaderButtons name="Contacts" onClick={showAboutUs} />
      <HeaderButtons name="About Us" onClick={showAboutUs} />
      <HeaderButtons name="Support" onClick={showAboutUs} />
      <HeaderBacketButton onClick={showBacketModal} />
      <Modals active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default Header;
