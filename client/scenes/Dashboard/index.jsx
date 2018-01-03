import React from 'react';
import CSSModules from 'react-css-modules';
import Card from '@/components/Card';
import styles from './styles.css';
import childrenImg from './assets/img/1.jpg';
import speechScreenImg from './assets/img/2.jpg';
import intelAnalysisImg from './assets/img/3.jpg';
import individualPlansImg from './assets/img/4.jpg';
import speechCardImg from './assets/img/5.jpg';
import resultAnalysisImg from './assets/img/6.jpg';
import individualCardImg from './assets/img/7.jpg';

const Dashboard = () => (
  <div>
    <div styleName="dashboard-row">
      <div styleName="dashboard-card">
        <Card
          title="Дети"
          subtitle="Список детей зачисленных на ЛП"
          link="/children"
          img={childrenImg}
        />
      </div>

      <div styleName="dashboard-card">
        <Card
          title="Речеовй экран"
          subtitle="Динамика коррекционной работы в речи ребенка"
          link="/speech_screen"
          img={speechScreenImg}
        />
      </div>

      <div styleName="dashboard-card">
        <Card
          title="Интеллектуальный анализ"
          subtitle="Анализ проблем, динамика, прогнозирование"
          link="/intel_analysis"
          img={intelAnalysisImg}
        />
      </div>
    </div>

    <div styleName="dashboard-row">
      <div styleName="dashboard-card">
        <Card
          title="Индивидуальные планы"
          subtitle="План развития для каждого ребенка"
          link="/individual_plans"
          img={individualPlansImg}
        />
      </div>

      <div styleName="dashboard-card">
        <Card
          title="Речевые карты"
          subtitle="Карты речевого развития"
          link="/speech_cards"
          img={speechCardImg}
        />
      </div>

      <div styleName="dashboard-card">
        <Card
          title="Анализ результативности"
          subtitle="Анализ результативности детей"
          link="/result_analysis"
          img={resultAnalysisImg}
        />
      </div>
    </div>

    <div styleName="dashboard-row">
      <div styleName="dashboard-card">
        <Card
          title="Индивидуальная карта"
          subtitle="Индивидуальная карта развития"
          link="/individual_cards"
          img={individualCardImg}
        />
      </div>
    </div>
  </div>
);

export default CSSModules(Dashboard, styles);
