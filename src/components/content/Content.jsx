import React from 'react';
import '../../App.css';
import './Content.css';
import { CurrentNews, NewsList } from '.';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Content(props) {
  const location = useLocation();
  const newsList = useSelector((state) => state.newsReducer.news);

  return (
    <Routes location={location} key={location.pathname}>
      <Route index path="/" element={<NewsList newsList={newsList} />} />

      {newsList.map((newsItem, i) => {
        const { id, name } = newsItem.source;
        const path = `news/${newsItem.title.replace(/\s/gi, '%20')}`;

        return (
          <Route
            key={`${i}_${!!id ? id : 'empty'}_${!!name ? name : 'empty'}`}
            path={path}
            element={
              <CurrentNews
                url={path}
                newsList={newsItem}
                publishedAt={newsItem.publishedAt}
              />
            }
          />
        );
      })}
    </Routes>
  );
}
