/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect } from 'react';
import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import { useGetPodcastsQuery } from '@/features/podcasts';
import './App.css';

function App() {
  const { data, isLoading, isSuccess, isError, refetch } = useGetPodcastsQuery();

  console.log('data', data);
  console.log('isLoading', isLoading);
  console.log('isSuccess', isSuccess);
  console.log('isError, ', isError);

  const handleClick = async () => {
    await refetch();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <button onClick={handleClick}>click</button>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
