import React, { Component } from 'react';
import fetchChidlren from '../api';
import Child from '../components/Child';


class DashboardContainer extends Component {
  state = { children: [] };

  componentDidMount() {
    fetchChidlren()
      .then(res => this.setState({ children: res.data }));
  }

  render() {
    return this.state.children.map(child => <Child data={child} key={child.id} />);
  }
}

export default DashboardContainer;
