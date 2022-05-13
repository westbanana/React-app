import React, { useState } from 'react';
import HeaderButtons from './HeaderButtons';
import HeaderBacketButton from './HeaderBacketbutton';
import HeaderLogo from './HeaderLogo';
import './ButtonsGoToHeader';
import './HeaderStyles.css';
import Modals from './Modals/Modals';
import './Modals/Modals.css';

const Header = ({ addedProduct }) => {
  const [modalActive, setModalActive] = useState(false);
  // document.getElementsByTagName('body');
  const showAboutUs = (param) => {
    console.log(param);
  };
  const showBacketModal = () => {
    setModalActive(true);
  };
  // console.log(addedProduct);
  return (
    <div className="header_container" id="main_header">
      <HeaderLogo />
      <HeaderButtons name="Contacts" onClick={showAboutUs} />
      <HeaderButtons name="About Us" onClick={showAboutUs} />
      <HeaderButtons name="Support" onClick={showAboutUs} />
      <HeaderBacketButton onClick={showBacketModal} />
      <Modals active={modalActive} setActive={setModalActive} addedProduct={addedProduct}>
        {addedProduct.map(((product) => (
          <div className="backet_product_block">
            <img src={product.image} alt="alt" className="backet_product_image" />
            <p className="backet_product_name">{product.name}</p>
            <p className="backet_product_price">{product.price}</p>
          </div>
        )))}
      </Modals>
    </div>
  );
};

export default Header;
