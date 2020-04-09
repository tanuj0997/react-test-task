import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { deepOrange } from '@material-ui/core/colors';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  avatar: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(1),
  }
}));

const LeftMenuOptions = [
  [
    {
      label: 'Integration',
      path: 'integration',
    }, 
    {
      label: 'Analysis',
      path: '/',
    },
    {
      label: 'Reports',
      path: 'reports',
    }
  ],
  [
    {
      label: 'Insights',
      path: '/',
    },
    {
      label: 'Contact Us',
      path: '/',
    }
  ]
];

const LeftMenu = ({ goToPath }) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <Box className={classes.avatar}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
      </Box>
      {
        LeftMenuOptions.map((section, index) => (
          <React.Fragment key={index}>
            <Divider />
            <List>
              {
                section.map(row => (
                  <ListItem button key={row.label} onClick={() => goToPath(row.path)}>
                    <ListItemText primary={row.label} />
                  </ListItem>
                ))
              }
            </List>
          </React.Fragment>
        ))
      }
      {/* <Divider />
      <List>
        {LeftMenuOptions[0].map((item) => (
          <ListItem button key={item.label} onClick={() => console.log('-----')}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {LeftMenuOptions[1].map((item) => (
          <ListItem button key={item.label}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List> */}
    </Drawer>
  )
}

LeftMenu.propTypes = {
  goToPath: PropTypes.func.isRequired,
};

export default LeftMenu;