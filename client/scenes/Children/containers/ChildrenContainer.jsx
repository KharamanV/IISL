import React, { Component } from 'react';
import fetchChidlren from '../../Dashboard/api';
import ChildrenTable from '../components/ChildrenTable';

class ChildrenContainer extends Component {
  state = { children: [] };

  componentDidMount() {
    fetchChidlren()
      .then(res => this.setState({ children: res.data }));
  }

  render() {
    const { children } = this.state;

    return children && <ChildrenTable data={children} />;
  }
}

export default ChildrenContainer;
