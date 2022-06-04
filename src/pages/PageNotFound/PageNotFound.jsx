import React from 'react';
import './PageNotFound.css';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div className="pageNotFound_block">
    <h1 className="pageNotFound_header">Page not found</h1>
    <Link className="pageNotFound_link" to="/">Main page</Link>
  </div>
);

export default PageNotFound;
