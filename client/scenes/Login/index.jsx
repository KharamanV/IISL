import React, { Component } from 'react';
import Auth from '@/services/auth';
import login from './api';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    login(this.state)
      .then(res => Auth.setAuthorized(res.data.token, '/'));
  };

  handleInputChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Login"
          onChange={this.handleInputChange}
          name="username"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={this.handleInputChange}
          name="password"
        />

        <button type="submit">OK</button>
      </form>
    );
  }
}

export default Login;
