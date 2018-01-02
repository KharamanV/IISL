import React from 'react';
import CSSModules from 'react-css-modules';
import Card from '@/components/Card';
import styles from './styles.css';

const Dashboard = () => (
  <div>
    <div styleName="dashboard-row">
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

      <div styleName="dashboard-card">
        <Card
          title="Интеллектуальный анализ"
          subtitle="Анализ проблем, динамика, прогнозирование"
          link="/intel_analysis"
        />
      </div>
    </div>

    <div styleName="dashboard-row">
      <div styleName="dashboard-card">
        <Card
          title="Индивидуальные планы"
          subtitle="План развития для каждого ребенка"
          link="/individual_plans"
        />
      </div>

      <div styleName="dashboard-card">
        <Card
          title="Речевые карты"
          subtitle="Карты речевого развития"
          link="/speech_cards"
        />
      </div>

      <div styleName="dashboard-card">
        <Card
          title="Анализ результативности"
          subtitle="Анализ результативности детей"
          link="/result_analysis"
        />
      </div>
    </div>

    <div styleName="dashboard-row">
      <div styleName="dashboard-card">
        <Card
          title="Индивидуальная карта"
          subtitle="Индивидуальная карта развития"
          link="/individual_cards"
        />
      </div>
    </div>
  </div>
);

export default CSSModules(Dashboard, styles);
