import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Auth from '@/services/auth';

const PrivateRoute = ({ component: Component, isAuthorized, redirect, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthorized
        ? <Component {...props} />
        : <Redirect to={redirect} />
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  redirect: PropTypes.string,
};

PrivateRoute.defaultProps = {
  redirect: '/login',
  isAuthorized: Auth.isAuthorized(),
};

export default PrivateRoute;
