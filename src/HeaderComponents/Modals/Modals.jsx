import React from 'react';
import './Modals.css';

const Modals = ({
  active, setActive, children,
}) => (
  // const lightOn = () => (
  //   light()
  // );
  <div className={`modal${active ? ' active' : ''}`} role="presentation" onClick={() => setActive(false)}>
    <div
      className={`modal_content${active ? ' modal_light' : ''}`}
      role="presentation"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  </div>
);

export default Modals;
