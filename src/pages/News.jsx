import React from 'react';
import { BsTrash } from 'react-icons/bs';

export default function News(props) {
  const { newsList } = props;

  return (
    <div>
      <p
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <strong style={{ fontSize: '1.5rem' }}> {newsList.title}</strong>
        <span
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.7rem',
          }}>
          <em className="flex_layout_date">{newsList.publishedAt}</em>
          <BsTrash className="delete_icon" style={{ marginLeft: '1rem' }} />
        </span>
      </p>

      <div style={{ display: 'flex' }}>
        <img
          src={newsList.urlToImage}
          alt="preview"
          style={{
            width: '300px',
            borderRadius: '0.25rem',
          }}
        />
        <div style={{ marginLeft: '1rem' }}>
          <p style={{ marginBlockStart: '0' }}>{newsList.content}</p>
          <a
            style={{
              color: '#2b93e9',
              fontWeight: '500',
              fontStyle: 'italic',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
            href={newsList.url}>
            Ссылка на источник
          </a>
        </div>
      </div>
    </div>
  );
}
