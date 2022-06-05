import React from 'react';
import { Link } from 'react-router-dom';

const HeaderButtons = ({ name }) => (
  <Link className="header_buttons" to="/">
    {name}
  </Link>
);

export default HeaderButtons;
