import React, { Component } from 'react';
import './App.css';
import Subheader from './Subheader';
import Content from './Content';

class Header extends Component {
  render() {
    return (
      <center>
        <div className="App container">
          <h1 className="text-danger">Biodata</h1>
        </div>
      </center>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Content />
      </div>
    );
  }
}

export default App;
