import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => (
  <div className="main_block">
    <h1 className="aboutPages_h1">You have two roads</h1>
    <div className="main_block_links">
      <Link className="link store" to="/das">React Store</Link>
      <Link className="link api" to="/unknownPages">Work with API</Link>
    </div>
  </div>
);

export default MainPage;
