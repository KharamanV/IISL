import React from 'react';
import PropTypes from 'prop-types';

const Child = ({ data }) => (
  <div>
    Name: {data.full_name}
  </div>
);

Child.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Child;
