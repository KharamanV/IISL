/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/api/login', { ...this.state })
      .then(console.log);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Login" onChange={e => this.setState({ username: e.target.value })} />
        <input type="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })} />

        <button type="submit">OK</button>
      </form>
    );
  }
}

export default Login;
