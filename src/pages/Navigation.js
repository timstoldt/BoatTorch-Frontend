// Navigation.js

import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/BoatTorch">BoatTorch</Link>
        </li>
      </ul>
    </nav>
    
    <Outlet/>
    </>
  );
};

export default Navigation;
