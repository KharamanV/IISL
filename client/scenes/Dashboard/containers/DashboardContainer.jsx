import React, { Component } from 'react';
import fetchChidlren from '../api';
import Child from '../components/Child';


class DashboardContainer extends Component {
  state = { children: [] };

  componentDidMount() {
    fetchChidlren()
      .then(children => this.setState({ children }));
  }

  render() {
    return this.state.children.map(() => <Child />);
  }
}

export default DashboardContainer;
