import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import fetchChildren from '@/api';
import ChildrenRows from '@/components/ChildrenRows';

class ChildrenList extends Component {
  static propTypes = {
    match: PropTypes.shape({
      path: PropTypes.string,
    }).isRequired,
  };

  state = { children: [] };

  componentDidMount() {
    fetchChildren()
      .then(res => this.setState({ children: res.data }));
  }

  render() {
    const { children } = this.state;
    const { path } = this.props.match;

    return <ChildrenRows data={children} linkPrefix={path} />;
  }
}

export default withRouter(ChildrenList);
