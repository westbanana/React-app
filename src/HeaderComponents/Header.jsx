import React, { useState } from 'react';
import HeaderButtons from './HeaderButtons';
import HeaderBacketButton from './HeaderBacketbutton';
import HeaderLogo from './HeaderLogo';
import './ButtonsGoToHeader';
import './HeaderStyles.css';
import Modals from './Modals/Modals';
import './Modals/Modals.css';

const Header = ({ addedProduct, setAddedProduct }) => {
  const [modalActive, setModalActive] = useState(false);
  // const [totalPrice, setTotalPrice] = useState(0);
  const showAboutUs = (param) => {
    console.log(param);
  };
  const showBacketModal = () => {
    setModalActive(true);
  };
  const priceArr = addedProduct.map((product) => (
    product.price
  ));

  let totalPrice = 0;

  priceArr.forEach((elem) => {
    totalPrice += elem;
  });

  return (
    <div className="header_container" id="main_header">
      <HeaderLogo />
      <HeaderButtons name="Contacts" onClick={showAboutUs} />
      <HeaderButtons name="About Us" onClick={showAboutUs} />
      <HeaderButtons name="Support" onClick={showAboutUs} />
      <HeaderBacketButton onClick={showBacketModal} />
      <Modals
        active={modalActive}
        setActive={setModalActive}
        addedProduct={addedProduct}
        totalPrice={totalPrice}
      >
        {addedProduct.map(((product) => (
          <div className="backet_product_block">
            <img src={product.image} alt="alt" className="backet_product_image" />
            <div className="product_info">
              <p className="backet_product_name">
                {product.name}
              </p>
              <p className="backet_product_price">
                {`${product.price}$`}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                console.log(product.id);
                console.log(addedProduct);
                setAddedProduct(addedProduct.splice(product.id, 1));
                console.log(addedProduct);
              }}
            >
              X
            </button>
          </div>
        )))}
      </Modals>
    </div>
  );
};

export default Header;
