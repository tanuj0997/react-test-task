import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { getReports } from './reducer';
import Loader from '../../components/Loader';
import SearchTextfield from '../../components/SearchTextfield';
import ReportTable from '../../components/ReportTable';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const ReportsScreen = ({ reports, getReports, loading }) => {
  const classes = useStyles();

  useEffect(() => {
    getReports()
  }, [getReports]);

  return (
    <div className={classes.root}>
      <Loader loading={loading}/>
      <SearchTextfield />
      <ReportTable reports={reports} />
    </div>
  );
}

ReportsScreen.propTypes = {
  getReports: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  reports: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  reports: state.reports.list,
  loading: state.reports.loading,
});

const mapDispatchToProps = { getReports };

export default connect(mapStateToProps, mapDispatchToProps)(ReportsScreen);
