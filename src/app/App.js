import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header'
import LeftMenu from '../components/LeftMenu'
import { routes } from '../routes';
import { startSaga } from './rootSaga';
import Snackbars from '../components/SnackBars';
import { setClose } from '../containers/Notifications/reducer';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  rightContent: {
    width: `calc(100% - ${drawerWidth}px)`,
    height: '100vh',
  },
  contentArea: {
    height: 'calc(100% - 96px)'
  }
}));

const App = ({ push, setClose, notifications }) => {
  const classes = useStyles();
  const goToPath = path => push(path);

  return (
    <div className={classes.root}>
      <LeftMenu goToPath={goToPath}/>
      <div className={classes.rightContent}>
        <Snackbars { ...notifications} setClose={setClose} />
        <Header placeholder="Hi, Dear Test User"/>
        <div className={classes.contentArea}>
          {routes}
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  push: PropTypes.func.isRequired,
  setClose: PropTypes.func.isRequired,
  notifications: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  notifications: state.notifications,
});

const mapDispatchToProps = { 
  push,  
  setClose,
};

const WrappedComponent = connect(mapStateToProps, mapDispatchToProps)(App);

export default () => {
  startSaga();
  return <WrappedComponent />;
};
