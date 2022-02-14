import React from 'react';
import '../../../App.css';
import './NewsItem.css';
import { NavLink } from 'react-router-dom';

export default function NewsItem(props) {
  const { title, publishedAt, description, urlToImage } = props.newsItem;

  return (
    <li style={{ margin: '0.5rem' }}>
      <NavLink to={`news/${props.url}`} className="news_item_link">
        <div className="flex_layout">
          <div className="flex_layout_title">
            <img
              src={urlToImage}
              alt="preview"
              style={{
                width: '6.25rem',
                height: '4.1rem',
                borderRadius: '0.25rem',
                transition: 'all 300ms ease',
              }}
            />
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 1rem',
                fontSize: '1.5rem',
              }}>
              <strong>{title}</strong>
            </span>
          </div>
          <div className="flex_layout_date">
            <em>{publishedAt}</em>
          </div>
        </div>
        <p style={{ textAlign: 'justify', wordBreak: 'break-word' }}>{description} </p>
      </NavLink>
    </li>
  );
}
