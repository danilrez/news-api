import React from 'react';
import '../App.css';
import { BsNewspaper, BsRss } from 'react-icons/bs';

export default function Header(props) {
  return (
    <header className="header">
      <ul className="header_nav">
        <li>
          <a href="/#" className="nav_link">
            <BsRss style={{ margin: '0 0.5rem' }} />
            News
          </a>
        </li>
        <li>
          <a href="/news_item" className="nav_link">
            <BsNewspaper style={{ margin: '0 0.5rem' }} />
            NewsItem
          </a>
        </li>
      </ul>
    </header>
  );
}
