import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlexDemo from './views/flex';

import Todo from './views/todo'

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FlexDemo></FlexDemo>
    </div>
    <Todo></Todo>
    </>
  );
}

export default App;
