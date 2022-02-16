import React from 'react';
import NewsItem from './newsItem/NewsItem';

export default function NewsList({ newsList }) {
  return (
    <ul className="content__items">
      {newsList.map((newsItem, i) => {
        const { id, name } = newsItem.source;
        return (
          <NewsItem
            url={newsItem.title}
            key={`${i}_${!!id ? id : 'empty'}_${!!name ? name : 'empty'}`}
            newsItem={newsItem}
          />
        );
      })}
    </ul>
  );
}
