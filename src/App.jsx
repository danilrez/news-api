import React from 'react';
import Content from './components/content/Content';
import Header from './components/header/Header';
import { fetchData, dateConverter } from './API';
import './App.css';

import Loader from './components/loader/Loader';

let count = 0;

export default function App() {
  count++;

  let statusOK, statusError;
  const [news, setNews] = React.useState([]);
  const { status, code, message, articles } = news;

  React.useEffect(() => {
    const fetchedData = async () => {
      setNews(await fetchData());
    };
    fetchedData();

    // For testing error status
    // setTimeout(() => {
    //   setNews({
    //     status: 'error',
    //     totalResults: 123,
    //     articles: [],
    //   });
    // }, 1000);
  }, []);

  if (articles && count <= 3) {
    articles.forEach((el) => {
      el.publishedAt = dateConverter(el.publishedAt);
    });
  }

  if (status && status === 'ok') {
    statusOK = <Content newsList={articles} />;
  }

  if (status && status !== 'ok') {
    statusError = (
      <div className="status_error">
        <h1>
          {status}: {code}
        </h1>
        <span>{message}</span>
      </div>
    );
  }

  return (
    <div className="grid_layout">
      <Header />
      <main className="main">
        {status ? status === 'ok' ? statusOK : statusError : <Loader />}
      </main>
      <footer className="footer">footer</footer>
    </div>
  );
}
