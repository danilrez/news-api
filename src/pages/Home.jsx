import React from 'react';
import NewsItem from '../components/content/newsItem/NewsItem';

export default function Home(props) {
  return (
    <ul className="content__items">
      {props.newsList.map((newsItem, i) => {
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
