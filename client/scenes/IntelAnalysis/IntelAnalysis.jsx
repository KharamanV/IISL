import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import ChildrenList from '@/containers/ChildrenList';
import IntelAnalysisCharts from './containers/IntelAnalysisCharts';

class IndividualPlans extends Component {
  static propTypes = {
    match: PropTypes.shape().isRequired,
  };

  state = {};

  render() {
    return (
      <Switch>
        <Route exact path={this.props.match.url} render={() => <ChildrenList />} />
        <Route path={`${this.props.match.url}/:id`} component={IntelAnalysisCharts} />
      </Switch>
    );
  }
}

export default IndividualPlans;
