import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import Auth from '@/services/auth';
import Login from '@/scenes/Login';
import PrivateRoute from '../PrivateRoute';
import Header from '../Header';
import styles from './styles.css';

const App = () => (
  <div className="app">
    <Header />

    <Router>
      <Switch>
        <PrivateRoute
          path="/"
          component={}
          isAuthorized={Auth.isAuthorized()}
        />

        <Route path="/login" component={Login} />

        <Redirect to="/login" />
      </Switch>
    </Router>
  </div>
);

export default CSSModules(App, styles);
