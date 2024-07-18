import React from 'react';
import './header.css';
import * as helpers from '../../utils.js'

const Header = ({name}) => {
  return (
    <div className="header-container">
      <div className="container">
        <div className='row'>
            <h1 className='col'>{name}</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
