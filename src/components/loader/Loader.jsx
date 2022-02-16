import React from 'react';
import { useSelector } from 'react-redux';
import './Loader.css';

export default function Loader() {
  const loader = useSelector((state) => state.loadReducer.loading);

  return (
    <div className="loading-blocks">
      <div hidden={loader}></div>
      <div hidden={loader}></div>
      <div hidden={loader}></div>
    </div>
  );
}
