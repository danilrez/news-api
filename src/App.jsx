import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from './redux/action';

import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './context/ThemeContext';

import Content from './components/content/Content';
import Header from './components/header/Header';
import Loader from './components/loader/Loader';

import {
  GlobalStyles,
  useDarkMode,
  LightMode,
  DarkMode,
} from './GlobalStyles/GlobalStyles';
import './App.css';

export default function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.newsReducer.status);
  const error = useSelector((state) => state.loadReducer.error);

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? LightMode : DarkMode;

  React.useEffect(() => {
    dispatch(fetchNews());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themeMode}>
        <div className="grid_layout">
          <GlobalStyles />
          <Header />
          <main className="main">
            {error && <div className="status_error">{error}</div>}
            <div className="content">
              <Loader />
              {!!status && <Content />}
            </div>
          </main>
          <footer className="footer">footer</footer>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
