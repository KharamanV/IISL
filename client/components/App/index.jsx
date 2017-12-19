import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import CSSModules from 'react-css-modules';
import Login from '@/scenes/Login';
import Dashboard from '@/scenes/Dashboard';
import Children from '@/scenes/Children';
import PrivateRoute from '../PrivateRoute';
import Header from '../Header';
import styles from './styles.css';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Router>
      <div className="app">
        <Header />

        <div styleName="content">
          <Switch>
            <PrivateRoute
              exact
              path="/"
              component={Dashboard}
            />

            <PrivateRoute path="/children" component={Children} />

            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    </Router>
  </MuiThemeProvider>
);

export default CSSModules(App, styles);
