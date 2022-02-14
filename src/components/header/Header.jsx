import React from 'react';
import '../../App.css';
import './Header.css';

import { ThemeContext } from '../../context/ThemeContext';
import { BsCircleFill, BsCircle, BsRss } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

export default function Header(props) {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <header className="header">
      <ul className="header_nav">
        <li>
          <NavLink to="/" className="nav_link">
            <BsRss className="nav_icons" />
            <span>News</span>
          </NavLink>
        </li>
        <li>
          <div className="nav_link" onClick={toggleTheme}>
            {theme === 'light' ? (
              <BsCircleFill className="nav_icons" />
            ) : (
              <BsCircle className="nav_icons" />
            )}
            <span>Switch theme</span>
          </div>
        </li>
      </ul>
    </header>
  );
}
