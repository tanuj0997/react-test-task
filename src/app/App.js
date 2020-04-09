import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header'
import LeftMenu from '../components/LeftMenu'
import { routes } from '../routes';
import { push } from 'connected-react-router';
import { startSaga } from './rootSaga';
import { connect } from 'react-redux';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  rightContent: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
}));

const App = ({ push }) => {
  const classes = useStyles();
  const goToPath = path => push(path);

  return (
    <div className={classes.root}>
      <LeftMenu goToPath={goToPath}/>
      <div className={classes.rightContent}>
        <Header />
        <h4>Hi There!</h4>
        {routes}
      </div>
    </div>
  );
}

App.propTypes = {
  push: PropTypes.func.isRequired,
};

const mapDispatchToProps = { push };

const WrappedComponent = connect(null, mapDispatchToProps)(App);

export default () => {
  startSaga();
  return <WrappedComponent />;
};
