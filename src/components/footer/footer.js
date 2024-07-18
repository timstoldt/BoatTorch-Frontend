import React from 'react';
import './footer.css';
import * as helpers from '../../utils.js'

const Footer = () => {
  return (
    <footer className="footer text-white py-3">
      <div className="container">
        <div className='row'>
            <a className='col' href={'tel:' + process.env.REACT_APP_PHONE}>{helpers.formatPhoneNumber(process.env.REACT_APP_PHONE)}</a>
        </div>
        <div className='row'>
            <a className='col' href={'mailto:' + process.env.REACT_APP_EMAIL}>boattorch@gmail.com</a>
        </div>
        <div className="row">
          <div className="col">
            <p className="mb-0">&copy; 2024 Boattorch, LLC. All rights reserved.</p>
          </div>
        </div>
        <div className='row'>
            <a href="/contract" className="text-white me-2 col">Contract</a>
            <a href="/policy" className="text-white me-2 col">Policy</a>
            <a href="/contact" className="text-white col" >Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
