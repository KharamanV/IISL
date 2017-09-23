import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          Hello World!
        </div>
      </Router>
    );
  }
}

export CSSModules(App, styles);
