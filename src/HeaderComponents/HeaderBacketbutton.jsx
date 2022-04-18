import React from 'react';
import basketIcon from './BasketIcon.png';

const HeaderBacketButton = () => (
  <a href="www" className="basket_button">
    <img src={basketIcon} alt="" className="basket_btn_ico" />
  </a>
);

export default HeaderBacketButton;
