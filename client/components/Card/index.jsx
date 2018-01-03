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

const CustomCard = ({ title, subtitle, link, img, className }) => (
  <div styleName={className}>
    <Card>
      <CardMedia
        overlay={<CardTitle title={title} subtitle={subtitle} />}
        mediaStyle={{ height: 240, overflow: 'hidden' }}
      >
        <img src={img} alt="" />
      </CardMedia>

      <CardActions>
        <RaisedButton primary>
          <Link styleName="link" to={link}>Перейти</Link>
        </RaisedButton>
      </CardActions>
    </Card>
  </div>
);

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
  img: PropTypes.string,
};

CustomCard.defaultProps = {
  subtitle: '',
  className: '',
  img: 'http://placehold.it/400x250',
};

export default CSSModules(CustomCard, styles);
