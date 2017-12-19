import React from 'react';
import CSSModules from 'react-css-modules';
import Card from '@/components/Card';
import styles from './styles.css';

const Dashboard = () => (
  <div styleName="dashboard">
    <div styleName="dashboard-card">
      <Card
        title="Дети"
        subtitle="Список детей зачисленных на ЛП"
        link="/children"
      />
    </div>

    <div styleName="dashboard-card">
      <Card
        title="Речеовй экран"
        subtitle="Динамика коррекционной работы в речи ребенка"
        link="/speech_screen"
      />
    </div>
  </div>
);

export default CSSModules(Dashboard, styles);
