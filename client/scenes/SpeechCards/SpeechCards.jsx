import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import ChildrenList from '@/containers/ChildrenList';
import SpeechCard from './containers/SpeechCard';

class SpeechCards extends Component {
  static propTypes = {
    match: PropTypes.shape().isRequired,
  };

  state = {};

  render() {
    return (
      <Switch>
        <Route exact path={this.props.match.url} render={() => <ChildrenList />} />
        <Route path={`${this.props.match.url}/:id`} component={SpeechCard} />
      </Switch>
    );
  }
}

export default SpeechCards;
