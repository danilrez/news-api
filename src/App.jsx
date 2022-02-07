import React from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';

function App() {
  return (
    <div className="grid_layout">
      <Header />
      <Content />
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
