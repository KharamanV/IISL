import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import CSSModules from 'react-css-modules';
import Login from '@/scenes/Login';
import Dashboard from '@/scenes/Dashboard';
import Children from '@/scenes/Children';
import IntelAnalysis from '@/scenes/IntelAnalysis';
import IndividualPlans from '@/scenes/IndividualPlans';
import SpeechCards from '@/scenes/SpeechCards';
import SpeechScreen from '@/scenes/SpeechScreen';
import ResultAnalysis from '@/scenes/ResultAnalysis';
import IndividualCards from '@/scenes/IndividualCards';
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
            <PrivateRoute path="/speech_screen" component={SpeechScreen} />
            <PrivateRoute path="/intel_analysis" component={IntelAnalysis} />
            <PrivateRoute path="/individual_plans" component={IndividualPlans} />
            <PrivateRoute path="/speech_cards" component={SpeechCards} />
            <PrivateRoute path="/result_analysis" component={ResultAnalysis} />
            <PrivateRoute path="/individual_cards" component={IndividualCards} />

            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    </Router>
  </MuiThemeProvider>
);

export default CSSModules(App, styles);
