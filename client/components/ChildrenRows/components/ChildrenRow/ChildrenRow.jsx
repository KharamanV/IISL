import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Avatar, Divider, ListItem } from 'material-ui';

const ChildrenRow = ({ linkPrefix, data }) => (
  <Link to={`${linkPrefix}/${data.id}`} style={{ textDecoration: 'none' }}>
    <ListItem
      leftAvatar={<Avatar src="https://placehold.it/128x128" />}
      primaryText={data.full_name}
      secondaryText={(
        <p>
          <span>Дата рождения</span>
          <br />
          <span>{data.date}</span>
        </p>
      )}
      secondaryTextLines={2}
    />
    <Divider inset />
  </Link>
);

ChildrenRow.propTypes = {
  linkPrefix: PropTypes.string.isRequired,
  data: PropTypes.shape().isRequired,
};

export default ChildrenRow;
