import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './template/custom.css';

import React, { Component } from 'react';
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Routes/>
      </div>
    );
  }
}

export default App;
