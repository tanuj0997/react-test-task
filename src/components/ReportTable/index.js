import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 550,
  },
}));

const ROWS_PER_PAGE = 5;
const TABLE_HEAD = ['No.', 'Name', 'Date', 'Traffic', 'Trend'];

const ReportTable = ({ reports }) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const emptyRows = ROWS_PER_PAGE - Math.min(ROWS_PER_PAGE, reports.length - page * ROWS_PER_PAGE);

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {
                TABLE_HEAD.map(label => <TableCell key={label} align="right">{label}</TableCell>)
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              reports
              .slice(page * ROWS_PER_PAGE, page * ROWS_PER_PAGE + ROWS_PER_PAGE)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="right">{page * ROWS_PER_PAGE + index + 1}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.traffic}</TableCell>
                  <TableCell align="right">{row.trend}</TableCell>
                </TableRow>
              ))
            }
            {
              emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )
            }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[ROWS_PER_PAGE]}
        component="div"
        count={reports.length}
        rowsPerPage={ROWS_PER_PAGE}
        page={page}
        onChangePage={handleChangePage}
      />
    </>
  );
}

ReportTable.propTypes = {
  reports: PropTypes.array.isRequired,
};

export default ReportTable;