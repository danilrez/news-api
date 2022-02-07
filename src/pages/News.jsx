import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>News</li>
            <li>NewsItem</li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="content">
          <h1>title</h1>
          <p>description</p>
          <p>author</p>
          <p>url</p>
          <p>publishedAt</p>
          <p>content</p>
        </div>
      </main>
    </div>
  );
}

export default App;
