import React from 'react';

import './Loader.css';

export default function Loader() {
  return (
    <div className="loader">
      <div className="loader-div">
        <div className="loading-blocks">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
