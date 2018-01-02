/* eslint-disable */

import React from 'react';
import {
  List,
  Subheader,
  ListItem,
  Avatar,
  Divider,
} from 'material-ui';

const ChildrenList = props => (
  <div>
    <List>
      <Subheader>Today</Subheader>
      <ListItem
        leftAvatar={<Avatar src="https://placehold.it/128x128" />}
        primaryText="Brendan Lim"
        secondaryText={
          <p>
            <span>Brunch this weekend?</span><br />
            I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
          </p>
        }
        secondaryTextLines={2}
      />
      <Divider inset />
      <ListItem
        leftAvatar={<Avatar src="https://placehold.it/128x128" />}
        primaryText="me, Scott, Jennifer"
        secondaryText={
          <p>
            <span>Summer BBQ</span><br />
            Wish I could come, but I&apos;m out of town this weekend.
          </p>
        }
        secondaryTextLines={2}
      />
      <Divider inset />
      <ListItem
        leftAvatar={<Avatar src="https://placehold.it/128x128" />}
        primaryText="Grace Ng"
        secondaryText={
          <p>
            <span>Oui oui</span><br />
            Do you have any Paris recs? Have you ever been?
          </p>
        }
        secondaryTextLines={2}
      />
      <Divider />
      <ListItem
        leftAvatar={<Avatar src="https://placehold.it/128x128" />}
        primaryText="Kerem Suer"
        secondaryText={
          <p>
            <span>Birthday gift</span><br />
            Do you have any ideas what we can get Heidi for her birthday? How about a pony?
          </p>
        }
        secondaryTextLines={2}
      />
      <Divider />
      <ListItem
        leftAvatar={<Avatar src="https://placehold.it/128x128" />}
        primaryText="Raquel Parrado"
        secondaryText={
          <p>
            <span>Recipe to try</span><br />
            We should eat this: grated squash. Corn and tomatillo tacos.
          </p>
        }
        secondaryTextLines={2}
      />
    </List>
  </div>
);

export default ChildrenList;
