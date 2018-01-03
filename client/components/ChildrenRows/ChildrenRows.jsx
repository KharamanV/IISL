import React from 'react';
import PropTypes from 'prop-types';
import { List, Subheader } from 'material-ui';
import ChildrenRow from './components/ChildrenRow';

const ChildrenRows = ({ data, linkPrefix }) => (
  <div>
    <List>
      <Subheader>Дети</Subheader>

      {data.map(child => (
        <ChildrenRow
          key={child.id}
          data={child}
          linkPrefix={linkPrefix}
        />
      ))}
    </List>
  </div>
);

ChildrenRows.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  linkPrefix: PropTypes.string,
};

ChildrenRows.defaultProps = {
  linkPrefix: '/',
};

export default ChildrenRows;
