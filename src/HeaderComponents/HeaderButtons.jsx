import React from 'react';

const HeaderButtons = ({ name, onClick }) => {
  const showPage = () => {
    onClick(true);
  };

  return (
    <button type="button" className="header_buttons" onClick={showPage}>
      {name}
    </button>
  );
};

export default HeaderButtons;
