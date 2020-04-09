import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const tileData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'auto',
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(2),
  },
  gridListTile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rootCard: {
    width: 150,
    height: 150,
  },
  media: {
    height: 140,
  },
  actionArea: {
    height: '100%',
    display: 'flex',
  }
}));

const IntegrationScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile} cols={1} classes={{ root: classes.gridListTile, tile: classes.gridListTile }}>
            <Card className={classes.rootCard} variant="outlined">
              <CardActionArea className={classes.actionArea}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {`API ${tile}`}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default IntegrationScreen;
