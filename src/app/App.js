import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header'
import LeftMenu from '../components/LeftMenu'
import { routes } from '../routes';

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

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LeftMenu />
      <div className={classes.rightContent}>
        <Header />
        <h4>Hi There!</h4>
        {routes()}
      </div>
    </div>
  );
}

export default App;
