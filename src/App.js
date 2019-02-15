import React, { Component } from 'react';
// import { HashRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

import './App.css';
// import Route1 from './Components/Route1';
// import Route2 from './Components/Route2';
// import Route3 from './Components/Route3';
import Routes from './routes'



class App extends Component {
  render() {
    return (
        <div className="App">
          <Link to="/">
            <p>Route 1</p>
          </Link>
          <Link to="/2">
            <p>Route 2</p>
          </Link>
          <Link to="/3">
            <p>Route 3</p>
          </Link>
          { Routes }
        </div>
    );
  }
}

export default App;
