import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import Header from '../Header';
import Login from '../../scenes/Login';
import styles from './styles.css';

const App = () => (
  <div className="app">
    <Header />

    <Router>
      <Route path="/login" component={Login} />
    </Router>
  </div>
);

export default CSSModules(App, styles);
