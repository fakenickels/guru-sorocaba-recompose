import React, { Component } from 'react';
import { compose } from 'recompose'
import logo from './logo.svg';
import './App.css';
import withState from './hocs/withState'
import Pokemon from './Pokemon'

const App = ({ isAwesome, setAwesome }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p>Is awesome? <span>{isAwesome ? 'Yes' : 'No'}</span></p>
      <button onClick={() => setAwesome(true)}>Awesome on</button>
      <button onClick={() => setAwesome(false)}>Awesome off</button>
    <Pokemon />
    </div>
  );
}

export default withState('isAwesome', 'setAwesome', true)(App);
