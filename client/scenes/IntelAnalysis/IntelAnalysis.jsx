/* eslint-disable */
import React, { Component } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis, BarChart, XAxis, CartesianGrid, Tooltip, Legend, Bar, YAxis, AreaChart, Area,
  Sector, PieChart, Pie,
} from 'recharts'

const data = [
  { subject: 'Свистящие', A: 5 },
  { subject: 'Шипящие', A: 4 },
  { subject: 'Африкаты', A: 3 },
  { subject: 'Соноры', A: 2 },
];

const data2 = [
  {name: 'Ш', index: 4 },
  {name: 'Щ', index: 3 },
  {name: 'Ч', index: 3 },
  {name: 'Ж', index: 2 },
];

const data3 = [
  {name: 'С', index: 4 },
  {name: 'С\'', index: 3 },
  {name: 'З', index: 3 },
  {name: 'З\'', index: 2 },
];
const data4 = [
  {name: 'Т', index: 4 },
  {name: 'Т\'', index: 3 },
  {name: 'Ц', index: 3 },
  {name: 'З\'', index: 2 },
];
const data5 = [
  {name: 'М', index: 4 },
  {name: 'Н', index: 3 },
  {name: 'Л', index: 3 },
  {name: 'Р', index: 2 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

class IntelAnalysis extends Component {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (data, activeIndex) => this.setState({ activeIndex });

  render() {
    return (
      <div>
        <h3>Развитие различных типов звуков</h3>

        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
          <PolarGrid />

          <PolarAngleAxis dataKey="subject" />

          <PolarRadiusAxis domain={[0, 5]} scale="linear" />

          <Radar name="Типы звуков" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>

        <h3>Шипящие</h3>

        <BarChart
          width={450}
          height={300}
          data={data2}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <XAxis dataKey="name"/>
          <YAxis domain={[0, 5]} scale="linear"/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="index" fill="#8884d8" />
        </BarChart>

        <h3>Свистящие</h3>

        <BarChart
          width={450}
          height={300}
          data={data3}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <XAxis dataKey="name"/>
          <YAxis domain={[0, 5]} scale="linear"/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="index" fill="#8884d8" />
        </BarChart>

        <h3>Африкаты</h3>

        <BarChart
          width={450}
          height={300}
          data={data4}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <XAxis dataKey="name"/>
          <YAxis domain={[0, 5]} scale="linear"/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="index" fill="#8884d8" />
        </BarChart>

        <h3>Соноры</h3>

        <BarChart
          width={450}
          height={300}
          data={data5}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <XAxis dataKey="name"/>
          <YAxis domain={[0, 5]} scale="linear"/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="index" fill="#8884d8" />
        </BarChart>

        <h3>Динамика развития звуков</h3>

        <AreaChart width={800} height={400} data={[
          {name: 'Сентябрь', uv: 4000, pv: 2400, amt: 2400},
          {name: 'Октябрь', uv: 3000, pv: 1398, amt: 2210},
          {name: 'Ноябрь', uv: 2000, pv: 9800, amt: 2290},
          {name: 'Декабрь', uv: 2780, pv: 3908, amt: 2000},
          {name: 'Январь', uv: -1890, pv: 4800, amt: 2181},
          {name: 'Февраль', uv: 2390, pv: 3800, amt: 2500},
          {name: 'Март', uv: 3490, pv: 4300, amt: 2100},
          {name: 'Апрель', uv: 3490, pv: 4300, amt: 2100},
          {name: 'Май', uv: 3490, pv: 4300, amt: 2100},
          {name: 'Июнь', uv: 3490, pv: 4300, amt: 2100},
        ]}
                   margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />

          <Area name='Произношение звуков' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
        </AreaChart>

        <h3>Динамика развития речи</h3>

        <AreaChart width={800} height={400} data={[
          {name: 'Сентябрь', uv: 4000, pv: 2400, amt: 2400},
          {name: 'Октябрь', uv: 3000, pv: 1398, amt: 2210},
          {name: 'Ноябрь', uv: 2000, pv: 9800, amt: 2290},
          {name: 'Декабрь', uv: 2780, pv: 3908, amt: 2000},
          {name: 'Январь', uv: -1890, pv: 4800, amt: 2181},
          {name: 'Февраль', uv: 2390, pv: 3800, amt: 2500},
          {name: 'Март', uv: 3490, pv: 4300, amt: 2100},
          {name: 'Апрель', uv: 3490, pv: 4300, amt: 2100},
          {name: 'Май', uv: 3490, pv: 4300, amt: 2100},
          {name: 'Июнь', uv: 3490, pv: 4300, amt: 2100},
        ]}
                   margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip/>
          <Legend />

          <Area name='Грамматический строй' dataKey='uv' stroke='#fff' fill='#fff' />
          <Area name='ФФ. восприятие' dataKey='pv' stroke='#ccc' fill='#ccc' />
        </AreaChart>

        <h3>Прогнозирование развития звуков</h3>

        <AreaChart width={800} height={400} data={[
          {name: 'Сентябрь', uv: 4000, pv: 2400, amt: 2400},
          {name: 'Октябрь', uv: 3000, pv: 1398, amt: 2210},
          {name: 'Ноябрь', uv: 2000, pv: 9800, amt: 2290},
          {name: 'Декабрь', uv: 2780, pv: 3908, amt: 2000},
          {name: 'Январь', uv: -1890, pv: 4800, amt: 2181},
          {name: 'Февраль', uv: 2390, pv: 3800, amt: 2500},
          {name: 'Март', uv: 3490, pv: 4300, amt: 2100},
          {name: 'Апрель', uv: 3490, pv: 4300, amt: 2100},
          {name: 'Май', uv: 3490, pv: 4300, amt: 2100},
          {name: 'Июнь', uv: 3490, pv: 4300, amt: 2100},
        ]}
                   margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />

          <Area name='Произношение звуков' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
        </AreaChart>

        <h3>Прогнозирование развития речи</h3>

        <AreaChart width={800} height={400} data={[
          {name: 'Сентябрь', uv: 4000, pv: 2400, amt: 2400},
          {name: 'Октябрь', uv: 3000, pv: 1398, amt: 2210},
          {name: 'Ноябрь', uv: 2000, pv: 9800, amt: 2290},
          {name: 'Декабрь', uv: 2780, pv: 3908, amt: 2000},
          {name: 'Январь', uv: -1890, pv: 4800, amt: 2181},
          {name: 'Февраль', uv: 2390, pv: 3800, amt: 2500},
          {name: 'Март', uv: 3490, pv: 4300, amt: 2100},
          {name: 'Апрель', uv: 3490, pv: 4300, amt: 2100},
          {name: 'Май', uv: 3490, pv: 4300, amt: 2100},
          {name: 'Июнь', uv: 3490, pv: 4300, amt: 2100},
        ]}
                   margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip/>
          <Legend />

          <Area name='Грамматический строй' dataKey='uv' stroke='#fff' fill='#fff' />
          <Area name='ФФ. восприятие' dataKey='pv' stroke='#ccc' fill='#ccc' />
        </AreaChart>

        <h3>Диагноз</h3>

        <PieChart width={800} height={400}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={[{name: 'ЗНР', value: 450}, {name: 'ФНР', value: 300},
              {name: 'ННР', value: 300}, {name: 'ФФР', value: 200}]}
            cx={300}
            cy={200}
            dataKey="value"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
      </div>
    );
  }
}

export default IntelAnalysis;
