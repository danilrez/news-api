import React from 'react';
import { createGlobalStyle } from 'styled-components';

export const useDarkMode = () => {
  const [theme, setTheme] = React.useState('dark');

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme ? setTheme(localTheme) : setMode('dark');
  }, []);

  const toggleTheme = () => {
    theme === 'dark' ? setMode('light') : setMode('dark');
  };

  return [theme, toggleTheme];
};

export const GlobalStyles = createGlobalStyle`
  body{
    background-image: ${({ theme }) => theme.bgImage};
    background-repeat:no-repeat;
    background-position:center;
    background-attachment: fixed;
    background-size: cover;
    transition: background-image 500ms linear;
  }
  :root{
	--bg-hover: #e0e0e020;
  --bg-hover-items: ${({ theme }) => theme.bgHoverItems};
  --bg-theme: ${({ theme }) => theme.bgTheme};
  --text-color: ${({ theme }) => theme.textColor};
  --bg-content:${({ theme }) => theme.bgContent};
  --bg-delete:${({ theme }) => theme.bgDelete};
  };
`;

export const DarkMode = {
  bgImage: `url('https://i.redd.it/52f61nfzmwl51.jpg')`,
  bgTheme: '#323335',
  bgHoverItems: '#323335b0',
  bgContent: '#32333550',
  bgDelete: '#f5f6ffc0',
  bgHoverDrop: '#55565f',
  textColor: '#d3d5df',
};

export const LightMode = {
  bgImage: `url('https://www.teahub.io/photos/full/94-948093_abstract-wallpapers-1080p-for-free-wallpaper-abstract-orange.jpg')`,
  bgTheme: '#f5f6ff',
  bgHoverItems: '#f5f6ffb0',
  bgContent: '#f5f6ff50',
  bgDelete: '#323335c0',
  bgHoverDrop: '#d5d6df',
  textColor: '#353637',
};
