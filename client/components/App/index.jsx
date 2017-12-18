import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import Auth from '@/services/auth';
import Login from '@/scenes/Login';
import Dashboard from '@/scenes/Dashboard';
import PrivateRoute from '../PrivateRoute';
import Header from '../Header';
import styles from './styles.css';

const App = () => (
  <div className="app">
    <Header />

    <Router>
      <Switch>
        <PrivateRoute
          exact
          path="/"
          component={Dashboard}
          isAuthorized={Auth.isAuthorized()}
          redirect="/login"
        />

        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  </div>
);

export default CSSModules(App, styles);
