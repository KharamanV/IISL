import React from 'react';
import CSSModules from 'react-css-modules';
import Card from '@/components/Card';
import styles from './styles.css';

const Dashboard = () => (
  <div styleName="dashboard">
    <Card
      title="Дети"
      subtitle="Список детей зачисленных на ЛП"
      link="/children"
    />
  </div>
);

export default CSSModules(Dashboard, styles);
