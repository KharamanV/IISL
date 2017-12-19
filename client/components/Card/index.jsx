import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  RaisedButton,
} from 'material-ui';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

const CustomCard = ({ title, subtitle, link }) => (
  <Card>
    <CardMedia overlay={<CardTitle title={title} subtitle={subtitle} />}>
      <img src="http://placehold.it/400x250" alt="" />
    </CardMedia>

    <CardActions>
      <RaisedButton primary>
        <Link styleName="link" to={link}>Перейти</Link>
      </RaisedButton>
    </CardActions>
  </Card>
);

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  link: PropTypes.string.isRequired,
};

CustomCard.defaultProps = {
  subtitle: '',
};

export default CSSModules(CustomCard, styles);
