import React from 'react';
import Content from './components/content/Content';
import Header from './components/header/Header';
import { fetchData, dateConverter } from './API';

import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './context/ThemeContext';
import {
  GlobalStyles,
  useDarkMode,
  LightMode,
  DarkMode,
} from './GlobalStyles/GlobalStyles';
import './App.css';

import Loader from './components/loader/Loader';

let count = 0;

export default function App() {
  count++;

  let statusOK, statusError;
  const [news, setNews] = React.useState([]);
  const { status, code, message, articles } = news;

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? LightMode : DarkMode;

  React.useEffect(() => {
    const fetchedData = async () => {
      setNews(await fetchData());
    };

    setTimeout(() => fetchedData(), 1000);

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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themeMode}>
        <div className="grid_layout">
          <GlobalStyles />
          <Header />
          <main className="main">
            {status ? status === 'ok' ? statusOK : statusError : <Loader />}
          </main>
          <footer className="footer">footer</footer>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
