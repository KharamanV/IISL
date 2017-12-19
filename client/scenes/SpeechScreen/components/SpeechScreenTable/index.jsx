import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableRowColumn } from 'material-ui';
import CustomTable from '@/components/Table';

const SpeechScreenTable = ({ data }) => {
  const columns = [
    'ФФ. восприятия',
    'Год обучения',
    'Диагноз',
  ];

  return (
    <CustomTable headerColumns={columns}>
      {data.map(screen => (
        <TableRow key={screen.id}>
          <TableRowColumn>{screen.ff_perception}</TableRowColumn>
          <TableRowColumn>{screen.study_year}</TableRowColumn>
          <TableRowColumn>{screen.diagnosis}</TableRowColumn>
        </TableRow>
      ))}
    </CustomTable>
  );
};

SpeechScreenTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SpeechScreenTable;
