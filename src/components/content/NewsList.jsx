import React from 'react';
import NewsItem from './newsItem/NewsItem';

export default function NewsList({ newsList }) {
  return (
    <ul className="content__items">
      {newsList.map((newsItem, i) => {
        return (
          <NewsItem
            url={newsItem.title}
            key={`${i}_${newsItem.id}`}
            newsItem={newsItem}
          />
        );
      })}
    </ul>
  );
}
