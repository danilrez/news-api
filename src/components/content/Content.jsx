import React from 'react';
import '../../App.css';
import './Content.css';
import { Home, News } from '../../pages';
import { Routes, Route, useLocation } from 'react-router-dom';

export default function Content(props) {
  const location = useLocation();
  const { newsList } = props;

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        index
        path="/"
        element={
          <div className="content">
            <Home newsList={newsList} />
          </div>
        }
      />

      {newsList.map((newsItem, i) => {
        const { id, name } = newsItem.source;
        const path = `news/${newsItem.title.replace(/\s/gi, '%20')}`;

        return (
          <Route
            key={`${i}_${!!id ? id : 'empty'}_${!!name ? name : 'empty'}`}
            path={path}
            element={
              <div className="content">
                <News url={path} newsList={newsItem} publishedAt={newsItem.publishedAt} />
              </div>
            }
          />
        );
      })}
    </Routes>
  );
}
