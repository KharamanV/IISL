import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import { AppBar, Drawer } from 'material-ui';
import styles from './styles.css';

class Header extends Component {
  state = {
    isDrawerOpen: false,
  };

  toggleDrawer = value => this.setState({ isDrawerOpen: value || !this.state.isDrawerOpen });

  render() {
    return (
      <header styleName="navbar">
        <AppBar title="Logoped" onLeftIconButtonClick={() => this.toggleDrawer()}>
          <Drawer
            docked={false}
            width={240}
            open={this.state.isDrawerOpen}
            onRequestChange={this.toggleDrawer}
          >
            <NavLink
              exact
              to="/"
              styleName="navbar-link"
              activeClassName="active"
              onClick={() => this.toggleDrawer()}
            >
              Home
            </NavLink>

            <NavLink
              to="/children"
              styleName="navbar-link"
              activeClassName="active"
              onClick={() => this.toggleDrawer()}
            >
              Список детей
            </NavLink>

            <NavLink
              to="/speech_screen"
              styleName="navbar-link"
              activeClassName="active"
              onClick={() => this.toggleDrawer()}
            >
              Речевой экран
            </NavLink>
          </Drawer>
        </AppBar>
      </header>
    );
  }
}

export default withRouter(CSSModules(Header, styles));
