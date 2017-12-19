import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const Child = ({ data }) => (
  <div>
    Name: {data.full_name}
    <RaisedButton label="Default" />
  </div>
);

Child.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Child;
