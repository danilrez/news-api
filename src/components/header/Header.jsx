import React from 'react';
import '../../App.css';
import './Header.css';

import { BsCircleHalf, BsRss } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className="header">
      <ul className="header_nav">
        <li>
          <NavLink to="/" className="nav_link">
            <BsRss style={{ margin: '0 0.5rem' }} />
            News
          </NavLink>
        </li>
        <li>
          <div className="nav_link">
            <BsCircleHalf style={{ margin: '0 0.5rem' }} />
            Theme
          </div>
        </li>
      </ul>
    </header>
  );
}
