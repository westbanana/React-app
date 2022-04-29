import React from 'react';
import basketIcon from './BasketIcon.png';

const HeaderBacketButton = ({ onClick }) => (

  <button type="button" className="basket_button" onClick={onClick}>
    <img src={basketIcon} alt="" className="basket_btn_ico" />
  </button>
);

export default HeaderBacketButton;
