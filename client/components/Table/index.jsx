import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';

const CustomTable = ({ headerColumns, children }) => (
  <Table>
    <TableHeader>
      <TableRow>
        {headerColumns.map(title => <TableHeaderColumn>{title}</TableHeaderColumn>)}
      </TableRow>
    </TableHeader>

    <TableBody>
      {children}
    </TableBody>
  </Table>
);

CustomTable.propTypes = {
  headerColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomTable;
