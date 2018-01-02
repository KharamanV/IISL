import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableRowColumn } from 'material-ui';
import CustomTable from '@/components/Table';
import formatDate from '@/utils/date';

const ChildrenTable = ({ data }) => {
  const columns = [
    'Ф.И.О.',
    'Дата рождения',
    'Адрес',
    'Дата обследования',
    '# протокола',
    '# группы',
  ];

  return (
    <CustomTable headerColumns={columns}>
      {data.map(child => (
        <TableRow key={child.id}>
          <TableRowColumn>{child.full_name}</TableRowColumn>
          <TableRowColumn>{formatDate(child.date)}</TableRowColumn>
          <TableRowColumn>{child.address}</TableRowColumn>
          <TableRowColumn>{formatDate(child.date_PMPC)}</TableRowColumn>
          <TableRowColumn>{child.protocol_number}</TableRowColumn>
          <TableRowColumn>{child.group_number} {child.group_name}</TableRowColumn>
        </TableRow>
      ))}
    </CustomTable>
  );
};

ChildrenTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChildrenTable;
